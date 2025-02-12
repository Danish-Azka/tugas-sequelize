import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Shop from "./shopModels.js";

const Product = db.define(
    
    "Product", {
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
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commnent: {
        type: DataTypes.STRING,
        allowNull: true
    },
},
    {
        tableName: "product",
    }

    Shop.hasOne(Transaksi, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    });
);



export default Product;
    