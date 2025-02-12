import express from "express"
const productRoute = express.Router();

productRoute.post("/product/post", createProduct)
productRoute.get("/product/get", getProduct)
productRoute.get("/product/get/:id", getProductById)
productRoute.get("/product/shop/:ShopId", getProductByShopId)
productRoute.put("/product/update/:id", updateProduct)
productRoute.delete("/product/delete/:id", deleteProduct)

export{productRoute}