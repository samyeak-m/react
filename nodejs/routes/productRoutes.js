const express = require("express");
const { createProduct, getProducts, getAllProducts, updateProduct, deleteProduct } = require("../controllers/ProductController");

const productRoutes = express.Router();

productRoutes.post("/",createProduct);
productRoutes.get("/",getAllProducts);
productRoutes.get("/:id",getProducts);
productRoutes.put("/:id",updateProduct);
productRoutes.delete("/:id",deleteProduct);


module.exports = productRoutes;