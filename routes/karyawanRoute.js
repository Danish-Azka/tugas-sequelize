import express from "express"
import { createKaryawan, getKaryawan, getKaryawanById, updateKaryawan, deleteKaryawan} from "../controller/karyawanController.js";
const karyawanRoute = express.Router();

karyawanRoute.post("/karyawan/post", createKaryawan)
karyawanRoute.get("/karyawan/get", getKaryawan)
karyawanRoute.get("/karyawan/get/:id", getKaryawanById)
karyawanRoute.put("/karyawan/update/:id", updateKaryawan)
karyawanRoute.delete("/karyawan/delete/:id", deleteKaryawan)

export{karyawanRoute}