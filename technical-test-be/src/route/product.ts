import { Router } from 'express';
const Database = require('better-sqlite3');
const db = new Database('database.db');
const router = Router();

router.get('/', (req, res) => {
  const { product_id } = req.query;
  const stmt = db.prepare(`SELECT * FROM products WHERE product_id = ?`);
  const product = stmt.get(product_id);
  res.json(product);
});

router.post('/', (req, res) => {
  const { product_id, product_title, product_price, product_description, product_category, product_image } = req.body;
  const stmt = db.prepare(`INSERT INTO products (product_id, product_title, product_price, product_description, product_category, product_image) VALUES (?, ?, ?, ?, ?, ?)`);
  stmt.run(product_id, product_title, product_price, product_description, product_category, product_image);
  res.json({ success: true });
});

router.put('/', (req, res) => {
  const { product_id, product_title, product_price, product_description, product_category, product_image } = req.body;
  const stmt = db.prepare(`
    UPDATE products SET product_title=?, product_price=?, product_description=?, product_category=?, product_image=?, updated_timestamp=CURRENT_TIMESTAMP
    WHERE product_id=?
  `);
  stmt.run(product_title, product_price, product_description, product_category, product_image, product_id);
  res.json({ success: true });
});

export default router;
