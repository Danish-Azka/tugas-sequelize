import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Order from "./order.js";
import Cart from "./cart.js";

const OrderCart = db.define("OrderCart", {}, { tableName: "order_cart" });

Order.belongsToMany(Cart, { through: OrderCart, foreignKey: "OrderId" });
Cart.belongsToMany(Order, { through: OrderCart, foreignKey: "CartId" });

export default OrderCart;
