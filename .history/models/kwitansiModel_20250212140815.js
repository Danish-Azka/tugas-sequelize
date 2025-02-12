import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Order from "./order.js";
import Cart from "./cart.js";

const kwi = db.define("kwi", {}, { tableName: "order_cart" });

Order.belongsToMany(Cart, { through: kwi, foreignKey: "OrderId" });
Cart.belongsToMany(Order, { through: kwi, foreignKey: "CartId" });

export default kwi;
