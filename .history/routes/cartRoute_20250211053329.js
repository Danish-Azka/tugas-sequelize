import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/cartController";
const ctRoute = express.Router();

ctRoute.post("/product/post", createCart)
ctRoute.get("/product/get", getCart)
ctRoute.get("/product/get/:id", getCartById)
ctRoute.put("/product/update/:id", updateCart)
ctRoute.delete("/product/delete/:id", deleteCart)

export{ctRoute}