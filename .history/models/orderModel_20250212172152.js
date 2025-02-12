import { DataTypes } from "sequelize";
import db from '../utils/connection.js';

const Order = db.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalPembayaran: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    metodeBayar: {
        type: DataTypes.ENUM('GearUpPay', 'TF Bank', 'Dana', 'Crypto'),
        allowNull: false
    }
}, { tableName: "order" });

export default Order;
