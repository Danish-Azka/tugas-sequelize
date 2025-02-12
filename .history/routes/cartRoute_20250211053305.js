import express from "express"
import { createCart, getCart, updateCart } from "../controller/cartController";
const productRoute = express.Router();

productRoute.post("/product/post", createCart)
productRoute.get("/product/get", getCart)
productRoute.get("/product/get/:id", getCartById)
productRoute.put("/product/update/:id", updateCart)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}