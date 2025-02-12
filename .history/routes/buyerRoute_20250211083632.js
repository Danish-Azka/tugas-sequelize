import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController.js";
const buyerRoue = express.Router();

buyerRoue.post("/cart/post", createCart)
buyerRoue.get("/cart/get", getCart)
buyerRoue.get("/cart/get/:id", getCartById)
buyerRoue.put("/cart/update/:id", updateCart)
buyerRoue.delete("/cart/delete/:id", deleteCart)

export{buyerRoue}