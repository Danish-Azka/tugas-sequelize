import express from "express"
import { createMobil, getMobil, getMobilById, updateMobil, deleteMobil } from "../controller/mobilController.js";
const mobilRoute = express.Router();

mobilRoute.post("/mobil/post", createMobil)
mobilRoute.get("/mobil/get", getMobil)
mobilRoute.get("/mobil/get/:id", getMobilById)
mobilRoute.put("/mobil/update/:id", updateMobil)
mobilRoute.delete("/mobile/delete/:id", deleteMobil)

export{mobilRoute}