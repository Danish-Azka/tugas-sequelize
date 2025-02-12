import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const productRoute = express.Router();

productRoute.post("/product/post", createProduct)
productRoute.get("/product/get", getProduct)
productRoute.get("/product/get/:id", getProductById)
productRoute.put("/product/update/:id", updateProduct)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}