const express = require('express');
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId }).populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ userId: req.user.userId });
    if (!cart) {
      cart = new Cart({ userId: req.user.userId, products: [{ productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    const productIndex = cart.products.findIndex(p => p._id.toString() === req.params.id);
    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).send('Product not found in cart');
    }
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
