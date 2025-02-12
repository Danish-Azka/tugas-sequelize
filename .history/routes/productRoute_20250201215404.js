import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const  = express.Router();

.post("/shop/post", createProduct)
.get("/shop/get", getProduct)
.get("/shop/get/:id", getProductById)
.put("/shop/update/:id", updateProduct)
.delete("/shop/delete/:id", deleteProduct)

export{}