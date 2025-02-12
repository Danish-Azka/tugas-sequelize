import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const product = express.Router();

product.post("/shop/post", createProduct)
product.get("/shop/get", getProduct)
product.get("/shop/get/:id", getProductById)
product.put("/shop/update/:id", updateProduct)
product.delete("/shop/delete/:id", deleteProduct)

export{product}