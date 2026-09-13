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

app.use(express.json({ limit: '2mb' }));
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
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role, profilePicture: user.profilePicture || null, avatar: user.avatar || null } });
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
  res.json({ token, user: { id: user.id, email: user.email, username: user.username, role: user.role, class: user.class, products: user.products || [], profilePicture: user.profilePicture || null, avatar: user.avatar || null } });
});

app.get('/api/me', authenticate, (req, res) => {
  const db = getDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ id: user.id, email: user.email, username: user.username, role: user.role, class: user.class, products: user.products, profilePicture: user.profilePicture || null, avatar: user.avatar || null });
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

// ── Admin Stats ──

app.get('/api/admin/stats', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const db = getDB();
  let users;
  if (req.user.role === 'super_admin') {
    users = db.users.filter(u => u.id !== req.user.id);
  } else {
    users = db.users.filter(u => u.createdBy === req.user.id);
  }
  const stats = {
    students: users.filter(u => u.role === 'student').length,
    admins: users.filter(u => u.role === 'admin').length,
    users: users.filter(u => u.role === 'user').length,
    total: users.length,
    productCounts: {}
  };
  db.products.forEach(p => {
    stats.productCounts[p.slug] = users.filter(u => (u.products || []).includes(p.slug)).length;
  });
  res.json(stats);
});

// ── Super Admin: Update Any User ──

app.put('/api/superadmin/user/:id', authenticate, requireRole('super_admin'), (req, res) => {
  const db = getDB();
  const target = db.users.find(u => u.id === parseInt(req.params.id));
  if (!target) return res.status(404).json({ error: 'User not found' });
  if (target.role === 'super_admin') return res.status(403).json({ error: 'Cannot modify super admin' });
  const { password, role } = req.body;
  if (password) target.password = bcrypt.hashSync(password, 10);
  if (role && ['admin', 'user'].includes(role)) target.role = role;
  saveDB(db);
  res.json({ success: true, user: { id: target.id, email: target.email, username: target.username, role: target.role } });
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

// ── Documents ──

app.get('/api/documents', authenticate, (req, res) => {
  const db = getDB();
  const docs = (db.documents || []).filter(d => d.userId === req.user.id);
  res.json(docs.map(d => ({ id: d.id, title: d.title, type: d.type || 'note', updatedAt: d.updatedAt, createdAt: d.createdAt })));
});

app.post('/api/documents', authenticate, (req, res) => {
  const { title, content, type } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' });
  const db = getDB();
  if (!db.documents) { db.documents = []; }
  if (!db.nextDocId) { db.nextDocId = 1; }
  const doc = {
    id: db.nextDocId++,
    userId: req.user.id,
    title,
    content: content || '',
    type: type || 'note',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  db.documents.push(doc);
  saveDB(db);
  res.json({ success: true, id: doc.id });
});

app.get('/api/documents/:id', authenticate, (req, res) => {
  const db = getDB();
  const doc = (db.documents || []).find(d => d.id === parseInt(req.params.id) && d.userId === req.user.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  res.json(doc);
});

app.put('/api/documents/:id', authenticate, (req, res) => {
  const db = getDB();
  const doc = (db.documents || []).find(d => d.id === parseInt(req.params.id) && d.userId === req.user.id);
  if (!doc) return res.status(404).json({ error: 'Document not found' });
  const { title, content } = req.body;
  if (title !== undefined) doc.title = title;
  if (content !== undefined) doc.content = content;
  doc.updatedAt = new Date().toISOString();
  saveDB(db);
  res.json({ success: true });
});

app.delete('/api/documents/:id', authenticate, (req, res) => {
  const db = getDB();
  if (!db.documents) return res.status(404).json({ error: 'Document not found' });
  const before = db.documents.length;
  db.documents = db.documents.filter(d => !(d.id === parseInt(req.params.id) && d.userId === req.user.id));
  if (db.documents.length === before) return res.status(404).json({ error: 'Document not found' });
  saveDB(db);
  res.json({ success: true });
});

// ── Profile ──

app.put('/api/me/profile', authenticate, (req, res) => {
  const db = getDB();
  const user = db.users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  const { username, profilePicture, avatar } = req.body;
  if (username !== undefined && user.role !== 'student') {
    user.username = username || null;
  }
  if (profilePicture !== undefined && user.role !== 'student') {
    if (profilePicture && profilePicture.length > 500000) {
      return res.status(400).json({ error: 'Image too large (max 500KB)' });
    }
    user.profilePicture = profilePicture;
  }
  if (avatar !== undefined && user.role === 'student') {
    user.avatar = avatar;
  }
  saveDB(db);
  res.json({ success: true, user: { id: user.id, email: user.email, username: user.username, role: user.role, profilePicture: user.profilePicture || null, avatar: user.avatar || null } });
});

// ── Health ──

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ── Static Files ──

app.use('/server', (req, res) => res.status(403).send('Forbidden'));
app.use(express.static(ROOT_DIR));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rohans Web server running on port ${PORT}`);
});
