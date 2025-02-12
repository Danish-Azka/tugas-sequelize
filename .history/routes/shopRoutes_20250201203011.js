import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController";
const karyawanRoute = express.Router();

karyawanRoute.post("/karyawan/post", createShop)
karyawanRoute.get("/karyawan/get", getShop)
karyawanRoute.get("/karyawan/get/:id", getShopById)
karyawanRoute.get("/karyawan/get/divisi/:divisi", getKaryawanByDivisi)
karyawanRoute.put("/karyawan/update/:id", updateKaryawan)
karyawanRoute.delete("/karyawan/delete/:id", deleteKaryawan)

export{karyawanRoute}