const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access denied');

  try {
    const { name, price, description, category, image } = req.body;
    const product = new Product({ name, price, description, category, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access denied');

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).send('Access denied');

  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send('Product deleted');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
