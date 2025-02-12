import express from "express"
const karyawanRoute = express.Router();

karyawanRoute.post("/karyawan/post", createShop)
karyawanRoute.get("/karyawan/get", getKaryawan)
karyawanRoute.get("/karyawan/get/:id", getKaryawanById)
karyawanRoute.get("/karyawan/get/divisi/:divisi", getKaryawanByDivisi)
karyawanRoute.put("/karyawan/update/:id", updateKaryawan)
karyawanRoute.delete("/karyawan/delete/:id", deleteKaryawan)

export{karyawanRoute}