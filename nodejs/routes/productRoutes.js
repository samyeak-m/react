const express = require("express");
const { createProduct, getProducts, getAllProducts, updateProduct } = require("../controllers/ProductController");

const productRoutes = express.Router();

productRoutes.post("/",createProduct);
productRoutes.get("/",getAllProducts);
productRoutes.get("/:id",getProducts);
productRoutes.put("/:id",updateProduct);


module.exports = productRoutes;