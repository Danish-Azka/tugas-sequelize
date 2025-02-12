import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Buyer = db.define(
    "Buyer", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    saldo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "buyer",
    }
);




export default Buyer;
    