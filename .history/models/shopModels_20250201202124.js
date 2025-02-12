import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Shop = db.define(
    "Shop", {
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
    : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    divisi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },
    {
        tableName: "shop",
    }
);




export default Karyawan;
    