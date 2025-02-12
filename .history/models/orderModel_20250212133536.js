import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Mobil from "./mobilModel.js";
import Client from "./clientModel.js";
import Karyawan from "./karyawanModel.js";
import Pengembalian from "./pengembalianModel.js";

const Transaksi = db.define(
    
    "Transaksi", {
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
    batasPeminjaman : {
        type: DataTypes.STRING,
        allowNull: false
    },
    durasiSewa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalBiaya: {
        type: DataTypes.STRING,
        allowNull: false
    },

    },
    {
        tableName: "transaksi",
    }
);