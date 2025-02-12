import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController.js";
const buyer = express.Router();

buyer.post("/cart/post", createCart)
buyer.get("/cart/get", getCart)
buyer.get("/cart/get/:id", getCartById)
buyer.put("/cart/update/:id", updateCart)
buyer.delete("/cart/delete/:id", deleteCart)

export{buyer}