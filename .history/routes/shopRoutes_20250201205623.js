import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController.js";
const shopRoutes = express.Router();

shopRoute.post("/shop/post", createShop)
shopRoute.get("/shop/get", getShop)
shopRoute.get("/shop/get/:id", getShopById)
shopRoute.put("/shop/update/:id", updateShop)
shopRoute.delete("/shop/delete/:id", deleteShop)

export{shopRoutes}