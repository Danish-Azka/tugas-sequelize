import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct, getProductById } from "../controller/productController.js";
const productRoute = express.Router();

productRoute.post("/product/post", createProduct)
productRoute.get("/product/get", getProduct)
productRoute.get("/product/get/:id", getProductById)
productRoute.get("/product/get/:shopId"), getPro
productRoute.put("/product/update/:id", updateProduct)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}