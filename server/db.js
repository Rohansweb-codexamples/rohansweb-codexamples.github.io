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

  if (!db.products || db.products.length === 0) {
    db.products = [
      { id: 1, name: 'Coding Site', slug: 'coding', enabled: false, description: 'Write and run HTML, CSS, and JavaScript code in your browser.' },
      { id: 2, name: 'Website Builder', slug: 'builder', enabled: false, description: 'Build your own web pages with a visual editor.' },
      { id: 3, name: 'Coding for Kids', slug: 'coding-kids', enabled: false, description: 'Fun, simple coding activities for young learners.' }
    ];
    changed = true;
  }

  if (!db.users.find(u => u.email === 'rohanwest@rohansweb.co.uk')) {
    const hash = bcrypt.hashSync('Ewanandlam100', 10);
    db.users.push({
      id: db.nextUserId++,
      email: 'rohanwest@rohansweb.co.uk',
      username: null,
      password: hash,
      role: 'super_admin',
      createdBy: null,
      createdAt: new Date().toISOString()
    });
    changed = true;
  }

  if (changed) saveDB(db);
  return db;
}

module.exports = { getDB, saveDB, initializeDB };
