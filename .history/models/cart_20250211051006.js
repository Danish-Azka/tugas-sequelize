import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Shop from "./shopModels.js";

const CArt = db.define(
    
    "CArt", {
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
    category: {
        type: DataTypes.ENUM('Sparepart Kendaraan', 'Aksesoris Kendaraan', 'Perawatan & Perlengkapan', 'Peratalatan Bengkel & Modifikasi') ,
        allowNull: true
    },
},
    {
        tableName: "product",
    }

);
Shop.hasMany(CArt, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
CArt.belongsTo(Shop, {
    foreignKey: "ShopId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})



export default CArt;
    