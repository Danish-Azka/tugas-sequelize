import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController.js";
const shopRoutes = express.Router();

karyawanRoute.post("/karyawan/post", createShop)
karyawanRoute.get("/karyawan/get", getShop)
karyawanRoute.get("/karyawan/get/:id", getShopById)
karyawanRoute.put("/karyawan/update/:id", updateShop)
karyawanRoute.delete("/karyawan/delete/:id", deleteShop)

export{shopRoutes}