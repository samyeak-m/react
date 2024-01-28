const express = require("express");
const { createProduct, getProducts, getAllProducts } = require("../controllers/ProductController");

const productRoutes = express.Router();

productRoutes.post("/",createProduct);
productRoutes.get("/",getAllProducts);
productRoutes.get("/:id",getProducts);

module.exports = productRoutes;