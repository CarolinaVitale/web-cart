const express = require('express');
const cors = require('cors')
const router = require("express").Router();
const Product = require('../models/Product.model')

router.use(cors({ origin: process.env.ORIGIN }));

router.get('/products', async (req, res) =>{
  try {
    const products = await
    Product.find();
    res.json(products);
  } catch (error) {
    console.error('error al obtener la lista de productos, index.routes.js SERVER');
    res.status(500).json({ message: 'error al obtener la lista de productos, index.routes.js SERVER'})
  }
});

router.get("/", (req, res) => {
  res.json("All good in here");
});

module.exports = router;
