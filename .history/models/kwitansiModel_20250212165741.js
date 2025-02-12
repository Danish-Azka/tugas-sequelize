import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Order from "./order.js";
import Cart from "./cart.js";

const Kwitansi = db.define("Kwitansi", {}, { tableName: "kwitansi" });

Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });
Cart.belongsToMany(Order, { through: Kwitansi, foreignKey: "CartId" });

export default Kwitansi;
