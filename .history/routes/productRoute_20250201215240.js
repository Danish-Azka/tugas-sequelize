import express from "express"
import { createProduct } from "../controller/productController.js";
const shopRoutes = express.Router();

shopRoutes.post("/shop/post", createShop)
shopRoutes.get("/shop/get", getShop)
shopRoutes.get("/shop/get/:id", getShopById)
shopRoutes.put("/shop/update/:id", updateShop)
shopRoutes.delete("/shop/delete/:id", deleteShop)

export{shopRoutes}