import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController";
const shopRoutes = express.Router();

karyawashopRoute.post("/karyawan/post", createShop)
karyawashopRoute.get("/karyawan/get", getShop)
karyawashopRoute.get("/karyawan/get/:id", getShopById)
karyawashopRoute.put("/karyawan/update/:id", updateShop)
karyawashopRoute.delete("/karyawan/delete/:id", deleteShop)

export{shopRoutes}