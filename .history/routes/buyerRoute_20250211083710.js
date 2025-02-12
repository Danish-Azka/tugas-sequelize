import express from "express"
import { getBuyer } from "../controller/buyerController.js";
const buyerRoute = express.Router();

buyerRoute.post("/buyer/post", pos)
buyerRoute.get("/buyer/get", getBuyer)
buyerRoute.get("/buyer/get/:id", getCartById)
buyerRoute.put("/buyer/update/:id", updateCart)
buyerRoute.delete("/buyer/delete/:id", deleteCart)

export{buyerRoute}