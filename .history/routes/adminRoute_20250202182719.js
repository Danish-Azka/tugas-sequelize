import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";
import { createAdmin, getAdmin, loginAdmin, getAdminById } from "../controller/adminController.js";
const adminRoute = express.Router();

adminRoute.post("/admin/post", createAdmin)
adminRoute.get("/admin/get" ,getAdmin)
adminRoute.get("/admin/get/:id",verifyToken, getAdminById)
adminRoute.post("/admin/login", loginAdmin)
adminRoute.post("admin/regist", res)

export{adminRoute}