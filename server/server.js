const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { getDB, saveDB, initializeDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'rohans-web-dev-secret-2026';

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
    role: 'user', createdBy: null, createdAt: new Date().toISOString()
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
  res.json({ id: user.id, email: user.email, username: user.username, role: user.role });
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
    role: 'admin', createdBy: req.user.id, createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDB(db);
  res.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
});

// ── Admin ──

app.post('/api/admin/create-student', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
  const db = getDB();
  if (db.users.find(u => u.username === username)) {
    return res.status(409).json({ error: 'Username already taken' });
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = {
    id: db.nextUserId++, email: null, username, password: hash,
    role: 'student', createdBy: req.user.id, createdAt: new Date().toISOString()
  };
  db.users.push(user);
  saveDB(db);
  res.json({ success: true, user: { id: user.id, username: user.username, role: user.role } });
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
    id: u.id, email: u.email, username: u.username, role: u.role, createdAt: u.createdAt
  })));
});

// ── Products ──

app.get('/api/products', authenticate, (req, res) => {
  const db = getDB();
  if (req.user.role === 'admin' || req.user.role === 'super_admin') {
    res.json(db.products);
  } else {
    res.json(db.products.filter(p => p.enabled));
  }
});

app.post('/api/admin/toggle-product', authenticate, requireRole('admin', 'super_admin'), (req, res) => {
  const { productId } = req.body;
  const db = getDB();
  const product = db.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  product.enabled = !product.enabled;
  saveDB(db);
  res.json({ success: true, product });
});

// ── Health ──

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// ── Static Files (after API routes) ──

app.use('/server', (req, res) => res.status(403).send('Forbidden'));
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rohans Web server running on port ${PORT}`);
});
