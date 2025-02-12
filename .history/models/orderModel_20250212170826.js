import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Cart from "./cart.js";
import Kwitansi from "./kwitansi.js"; // Import tabel perantara

const Order = db.define(
    "Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        totalPembayaran: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metodeBayar: {
            type: DataTypes.ENUM('GearUpPay', 'TF Bank', 'Dana', 'Crypto'),
            allowNull: false
        }
    },
    {
        tableName: "order",
    }
);

Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });

export default Order;
