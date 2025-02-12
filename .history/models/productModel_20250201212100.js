import { DataTypes } from "sequelize";
import db from '../utils/connection.js'

const Product = db.define(
    
    "Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    merk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platNomor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kapasitasPenumpang: {
        type: DataTypes.INTEGER,
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
    },
    {
        tableName: "product",
    }
);



export default Product;
    