const express = require("express");
const { v4: uuidv4 } = require("uuid");
const auth = require("../middleware/auth");
const validateProduct = require("../middleware/validateProduct");
const router = express.Router();

let products = [];

// GET /api/products
router.get("/", (req, res) => {
  const { category, search, page = 1, limit = 5 } = req.query;
  let result = [...products];

  if (category) result = result.filter(p => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(q));
  }

  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + Number(limit));

  res.json({
    total: result.length,
    page: Number(page),
    limit: Number(limit),
    products: paginated
  });
});

// GET /api/products/:id
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST /api/products
router.post("/", auth, validateProduct, (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id
router.put("/:id", auth, validateProduct, (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  Object.assign(product, req.body);
  res.json(product);
});

// DELETE /api/products/:id
router.delete("/:id", auth, (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: "Product deleted successfully" });
});

// GET /api/products/stats
router.get("/stats/count-by-category", (req, res) => {
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
});

module.exports = router;
