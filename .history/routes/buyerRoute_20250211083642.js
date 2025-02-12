import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController.js";
const buyerRoute = express.Router();

buyerRoute.post("/buyer/post", createCart)
buyerRoute.get("/buyer/get", getCart)
buyerRoute.get("/buyer/get/:id", getCartById)
buyerRoute.put("/buyer/update/:id", updateCart)
buyerRoute.delete("/buyer/delete/:id", deleteCart)

export{buyerRoute}