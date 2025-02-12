import express from "express"
const buyerRoute = express.Router();

buyerRoute.post("/buyer/post", )
buyerRoute.get("/buyer/get", getCart)
buyerRoute.get("/buyer/get/:id", getCartById)
buyerRoute.put("/buyer/update/:id", updateCart)
buyerRoute.delete("/buyer/delete/:id", deleteCart)

export{buyerRoute}