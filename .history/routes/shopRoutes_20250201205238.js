import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController.js";
const shopRoutes = express.Router();

karyawashopRoute.post("/shop/post", createShop)
karyawashopRoute.get("/shop/get", getShop)
karyawashopRoute.get("/shop/get/:id", getShopById)
karyawashopRoute.put("/shop/update/:id", updateShop)
karyawashopRoute.delete("/shop/delete/:id", deleteShop)

export{shopRoutes}