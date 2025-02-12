import express from "express"
import { createCart, getCart } from "../controller/cartController";
const productRoute = express.Router();

productRoute.post("/product/post", createCart)
productRoute.get("/product/get", getCart)
productRoute.get("/product/get/:id", getCartById)
productRoute.get("/product/shop/:ShopId", getProductByShopId)
productRoute.put("/product/update/:id", updateProduct)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}