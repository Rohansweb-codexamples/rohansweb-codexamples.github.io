const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const { getDB, saveDB, initializeDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'rohans-web-dev-secret-2026';
const ROOT_DIR = path.join(__dirname, '..');

app.use(express.json());
initializeDB();

// ── Middleware ──

function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    req.user = jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

// ── Auth ──

app.post('/api/auth/login', (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ error: 'Login and password required' });
  const db = getDB();
  const user = db.users.find(u => u.email === login || u.username === login);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role } });
});

app.post('/api/auth/signup', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const db = getDB();
  if (db.users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = {
    id: db.nextUserId++, email, username: null, password: hash,
    role: 'user', createdBy: null, class: null, products: [],
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDB(db);
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role } });
});

app.get('/api/me', authenticate, (req, res) => {
  const db = getDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, email: user.email, username: user.username, role: user.role, class: user.class, products: user.products });
});

// ── Super Admin ──

app.post('/api/superadmin/create-admin', authenticate, requireRole('super_admin'), (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const db = getDB();
  if (db.users.find(u => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = {
    id: db.nextUserId++, email, username: null, password: hash,
    role: 'admin', createdBy: req.user.id, class: null, products: [],
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDB(db);
  res.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
});

// ── Admin: Student Management ──

app.post('/api/admin/create-student', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const { username, password, className, products } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
  const db = getDB();
  if (db.users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Username already taken' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = {
    id: db.nextUserId++, email: null, username, password: hash,
    role: 'student', createdBy: req.user.id,
    class: className || null, products: products || [],
    createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDB(db);
  res.json({ success: true, user: { id: user.id, username: user.username, role: user.role, class: user.class, products: user.products } });
});

app.put('/api/admin/student/:id', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const db = getDB();
  const student = db.users.find(u => u.id === parseInt(req.params.id) && u.role === 'student');
  if (!student) return res.status(404).json({ error: 'Student not found' });
  if (req.user.role === 'admin' && student.createdBy !== req.user.id) {
    return res.status(403).json({ error: 'You can only manage your own students' });
  }
  const { password, className, products } = req.body;
  if (password) student.password = bcrypt.hashSync(password, 10);
  if (className !== undefined) student.class = className || null;
  if (products !== undefined) student.products = products;
  saveDB(db);
  res.json({ success: true, student: { id: student.id, username: student.username, class: student.class, products: student.products } });
});

app.delete('/api/admin/user/:id', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const db = getDB();
  const userId = parseInt(req.params.id);
  const target = db.users.find(u => u.id === userId);
  if (!target) return res.status(404).json({ error: 'User not found' });
  if (target.role === 'super_admin') return res.status(403).json({ error: 'Cannot delete super admin' });
  if (req.user.role === 'admin' && (target.role !== 'student' || target.createdBy !== req.user.id)) {
    return res.status(403).json({ error: 'You can only delete your own students' });
  }
  db.users = db.users.filter(u => u.id !== userId);
  saveDB(db);
  res.json({ success: true });
});

app.get('/api/admin/users', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const db = getDB();
  let users;
  if (req.user.role === 'super_admin') {
    users = db.users.filter(u => u.id !== req.user.id);
  } else {
    users = db.users.filter(u => u.createdBy === req.user.id);
  }
  res.json(users.map(u => ({
    id: u.id, email: u.email, username: u.username, role: u.role,
    class: u.class || null, products: u.products || [],
    createdAt: u.createdAt
  })));
});

// ── Products (per-user access) ──

app.get('/api/products', authenticate, (req, res) => {
  const db = getDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  const products = db.products.map(p => {
    let hasAccess;
    if (user.role === 'admin' || user.role === 'super_admin') {
      hasAccess = true;
    } else if (user.role === 'student') {
      hasAccess = (user.products || []).includes(p.slug);
    } else {
      hasAccess = true;
    }
    return { id: p.id, name: p.name, slug: p.slug, description: p.description, hasAccess };
  });
  res.json(products);
});

// ── Super Admin: Website Editor ──

function isValidPageName(name) {
  return name && name.endsWith('.html') && !name.includes('..') && !name.includes('/') && !name.includes('\\');
}

app.get('/api/superadmin/pages', authenticate, requireRole('super_admin'), (req, res) => {
  try {
    const files = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html'));
    res.json(files);
  } catch {
    res.status(500).json({ error: 'Failed to list pages' });
  }
});

app.get('/api/superadmin/page', authenticate, requireRole('super_admin'), (req, res) => {
  const name = req.query.name;
  if (!isValidPageName(name)) return res.status(400).json({ error: 'Invalid page name' });
  const filePath = path.join(ROOT_DIR, name);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Page not found' });
  res.json({ name, content: fs.readFileSync(filePath, 'utf8') });
});

app.put('/api/superadmin/page', authenticate, requireRole('super_admin'), (req, res) => {
  const { name, content } = req.body;
  if (!isValidPageName(name)) return res.status(400).json({ error: 'Invalid page name' });
  if (content === undefined) return res.status(400).json({ error: 'Content required' });
  const filePath = path.join(ROOT_DIR, name);
  fs.writeFileSync(filePath, content);
  res.json({ success: true });
});

// ── Health ──

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ── Static Files ──

app.use('/server', (req, res) => res.status(403).send('Forbidden'));
app.use(express.static(ROOT_DIR));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rohans Web server running on port ${PORT}`);
});
