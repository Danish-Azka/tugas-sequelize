import express from "express"
import { createBuyer, getBuyer } from "../controller/buyerController.js";
const buyerRoute = express.Router();

buyerRoute.post("/buyer/post", createBuyer)
buyerRoute.get("/buyer/get", getBuyer)
buyerRoute.get("/buyer/get/:id", getBById)
buyerRoute.put("/buyer/update/:id", updateCart)
buyerRoute.delete("/buyer/delete/:id", deleteCart)

export{buyerRoute}