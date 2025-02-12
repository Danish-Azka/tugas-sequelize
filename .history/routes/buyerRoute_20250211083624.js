import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController.js";
const  = express.Router();

.post("/cart/post", createCart)
.get("/cart/get", getCart)
.get("/cart/get/:id", getCartById)
.put("/cart/update/:id", updateCart)
.delete("/cart/delete/:id", deleteCart)

export{}