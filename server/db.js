const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(__dirname, 'data.json');

function getDB() {
  if (!fs.existsSync(DB_PATH)) {
    return { users: [], products: [], nextUserId: 1 };
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function initializeDB() {
  const db = getDB();
  let changed = false;

  if (!db.nextUserId) {
    db.nextUserId = db.users.length > 0
      ? Math.max(...db.users.map(u => u.id)) + 1
      : 1;
    changed = true;
  }

  // Migrate products: remove 'enabled' field
  if (db.products && db.products.length > 0 && 'enabled' in db.products[0]) {
    db.products = db.products.map(({ enabled, ...rest }) => rest);
    changed = true;
  }

  // Seed products
  if (!db.products || db.products.length === 0) {
    db.products = [
      { id: 1, name: 'Coding Site', slug: 'coding', description: 'Write and run HTML, CSS, and JavaScript code in your browser.' },
      { id: 2, name: 'Website Builder', slug: 'builder', description: 'Build your own web pages with a visual editor.' },
      { id: 3, name: 'Coding for Kids', slug: 'coding-kids', description: 'Fun, simple coding activities for young learners.' }
    ];
    changed = true;
  }

  // Migrate users: add products and class fields
  db.users.forEach(u => {
    if (u.products === undefined) { u.products = []; changed = true; }
    if (u.class === undefined) { u.class = null; changed = true; }
  });

  // Seed super admin
  if (!db.users.find(u => u.email === 'rohanwest@rohansweb.co.uk')) {
    const hash = bcrypt.hashSync('Ewanandlam100', 10);
    db.users.push({
      id: db.nextUserId++,
      email: 'rohanwest@rohansweb.co.uk',
      username: null,
      password: hash,
      role: 'super_admin',
      createdBy: null,
      class: null,
      products: [],
      createdAt: new Date().toISOString()
    });
    changed = true;
  }

  if (changed) saveDB(db);
  return db;
}

module.exports = { getDB, saveDB, initializeDB };
