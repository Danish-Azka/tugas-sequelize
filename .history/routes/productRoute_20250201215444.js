import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const productRoute = express.Router();

productRoute.post("//post", createProduct)
productRoute.get("//get", getProduct)
productRoute.get("//get/:id", getProductById)
productRoute.put("//update/:id", updateProduct)
productRoute.delete("//delete/:id", deleteProduct)

export{productRoute}