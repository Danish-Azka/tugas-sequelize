import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Order from "./orderModel.js";
import Cart from "./cart.js";

const kwitansi = db.define("kwitansi", {}, { tableName: t" });

Order.belongsToMany(Cart, { through: kwitansi, foreignKey: "OrderId" });
Cart.belongsToMany(Order, { through: kwitansi, foreignKey: "CartId" });

export default kwitansi;
