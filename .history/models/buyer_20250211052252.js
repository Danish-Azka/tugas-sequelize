import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Buyre = db.define(
    "Buyre", {
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
    noTelp: {
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
        tableName: "karyawan",
    }
);




export default Buyre;
    