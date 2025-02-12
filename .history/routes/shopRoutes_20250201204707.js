import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController";
const shopRoutes = express.Router();

karyawashopRoute.post("//post", createShop)
karyawashopRoute.get("//get", getShop)
karyawashopRoute.get("//get/:id", getShopById)
karyawashopRoute.put("//update/:id", updateShop)
karyawashopRoute.delete("//delete/:id", deleteShop)

export{shopRoutes}