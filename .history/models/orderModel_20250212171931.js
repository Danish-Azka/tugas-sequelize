import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Kwitansi from "./kwitansiModel.js";
import Cart from "./cart.js";

const Order = db.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalPembayaran: {
        type: DataTypes.INTEGER, // Ubah ke INTEGER agar sesuai dengan format mata uang
        allowNull: false
    },
    metodeBayar: {
        type: DataTypes.ENUM('GearUpPay', 'TF Bank', 'Dana', 'Crypto'),
        allowNull: false
    }
}, { tableName: "order" });

export default Order;

// 🔗 Relasi setelah ekspor model
Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });
