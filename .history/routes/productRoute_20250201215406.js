import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const pro = express.Router();

pro.post("/shop/post", createProduct)
pro.get("/shop/get", getProduct)
pro.get("/shop/get/:id", getProductById)
pro.put("/shop/update/:id", updateProduct)
pro.delete("/shop/delete/:id", deleteProduct)

export{pro}