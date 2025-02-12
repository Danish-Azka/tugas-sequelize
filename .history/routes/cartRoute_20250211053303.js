import express from "express"
import { createCart, getCart } from "../controller/cartController";
const productRoute = express.Router();

productRoute.post("/product/post", createCart)
productRoute.get("/product/get", getCart)
productRoute.get("/product/get/:id", getCartById)
productRoute.put("/product/update/:id", updateC)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}