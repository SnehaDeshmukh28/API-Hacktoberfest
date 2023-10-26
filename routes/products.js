const express = require("express");
const router = express.Router();

const Products = require("../data/Products.json");

router.get("/", async (req, res) => {
  res.json(Products);
});

router.get("/category", async (req, res) => {
  const category = Products.map((product) => product.category);
  const allCategory = [...new Set(category)];
  res.json(allCategory);
});

router.get("/categories/:category", async (req, res) => {
  const { category } = req.params;
  const result = Products.filter((a) => a.category === category);
  if (result.length === 0) return res.status(404).send("Category Not Found");
  res.json(result);
});

router.get("/search", async (req, res) => {
  const { title } = req.query;
  const result = Products.filter((a) => a.title === title);
  if (result.length === 0) return res.status(404).send("Product Not Found");
  res.json(result);
});

router.get("/filter", async (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;

  let result = Products;

  if (minPrice) {
    result = result.filter((product) => {
      return product.price >= minPrice;
    });
  }
  if (maxPrice) {
    result = result.filter((product) => {
      return product.price <= maxPrice;
    });
  }
  res.json(result);
});

module.exports = router;
