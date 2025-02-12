import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const productRoute = express.Router();

productRoute.post("/shop/post", createProduct)
productRoute.get("/shop/get", getProduct)
productRoute.get("/shop/get/:id", getProductById)
productRoute.put("/shop/update/:id", updateProduct)
productRoute.delete("/shop/delete/:id", deleteProduct)

export{productRoute}