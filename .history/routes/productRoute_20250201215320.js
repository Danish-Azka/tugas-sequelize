import express from "express"
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../controller/productController.js";
const shopRoutes = express.Router();

shopRoutes.post("/shop/post", createProduct)
shopRoutes.get("/shop/get", getP)
shopRoutes.get("/shop/get/:id", getShopById)
shopRoutes.put("/shop/update/:id", updateShop)
shopRoutes.delete("/shop/delete/:id", deleteShop)

export{shopRoutes}