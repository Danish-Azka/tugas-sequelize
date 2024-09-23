import express from "express"
import { createAdmin, getAdmin, getAdminById } from "../controller/adminController.js";
const adminRoute = express.Router();

adminRoute.post("/admin/post", createAdmin)
adminRoute.get("/admin/get", getAdmin)
adminRoute.get("/admin/get/:id", getAdminById)

export{adminRoute}