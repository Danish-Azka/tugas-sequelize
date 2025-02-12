import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById } from "../controller/";
const cartRoute = express.Router();

cartRoute.post("/product/post", createCart)
cartRoute.get("/product/get", getCart)
cartRoute.get("/product/get/:id", getCartById)
cartRoute.put("/product/update/:id", updateCart)
cartRoute.delete("/product/delete/:id", deleteCart)

export{cartRoute}