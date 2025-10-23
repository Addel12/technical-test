import { Router } from 'express';
const Database = require('better-sqlite3');
const db = new Database('database.db');

const router = Router();

router.get('/', (req, res) => {
  const { page = 1, limit = 10, search = '' } = req.query;
  const offset = (Number(page) - 1) * Number(limit);
  const stmt = db.prepare(`
    SELECT * FROM products
    WHERE product_title LIKE ? OR product_description LIKE ? OR product_category LIKE ?
    LIMIT ? OFFSET ?
  `);
  const products = stmt.all(`%${search}%`, `%${search}%`, `%${search}%`, Number(limit), offset);
  const total = db.prepare(`SELECT COUNT(*) as count FROM products`).get().count;
  res.json({ items: products, total });
});

export default router;

