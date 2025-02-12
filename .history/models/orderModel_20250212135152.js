import { DataTypes, HasMany } from "sequelize";
import db from '../utils/connection.js'
import Mobil from "./mobilModel.js";
import Client from "./clientModel.js";
import Karyawan from "./karyawanModel.js";
import Pengembalian from "./pengembalianModel.js";
import Cart from "./cart.js";

const Order = db.define(
    
    "Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalPembayaran : {
        type: DataTypes.STRING,
        allowNull: false
    },
    metodeBayar : {
        type: DataTypes.ENUM('GearUpPay', 'TF Bank', 'Dana', 'Crypto') ,
        allowNull: false
    }
    },
    {
        tableName: "order",
    }
);
export default Order;
Cart.hasOne(Order, {
    
})