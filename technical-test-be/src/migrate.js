const Database = require('better-sqlite3');
const db = new Database('database.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    product_id TEXT PRIMARY KEY,
    product_title TEXT NOT NULL,
    product_price INTEGER NOT NULL,
    product_description TEXT,
    product_category TEXT,
    product_image TEXT,
    created_timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_timestamp TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('Migration selesai!');
db.close();
