import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const shopRoutes = express.Router();

shopRoutes.post("/shop/post", createProduct)
shopRoutes.get("/shop/get", getProduct)
shopRoutes.get("/shop/get/:id", getProductById)
shopRoutes.put("/shop/update/:id", updateProduct)
shopRoutes.delete("/shop/delete/:id", deleteProduct)

export{shopRoutes}