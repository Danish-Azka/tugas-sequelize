import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController.js";
const buyerRoute = express.Router();

buyerRoute.post("/cart/post", createCart)
buyerRoute.get("/cart/get", getCart)
buyerRoute.get("/cart/get/:id", getCartById)
buyerRoute.put("/cart/update/:id", updateCart)
buyerRoute.delete("/cart/delete/:id", deleteCart)

export{buyerRoute}