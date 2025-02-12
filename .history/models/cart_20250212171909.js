import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Product from "./productModel.js";
import Buyer from "./buyer.js";
import Shop from "./shopModels.js";
import Order from "./orderModel.js";
import Kwitansi from "./kwitansiModel.js";

const Cart = db.define("Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jumlah: {
        type: DataTypes.INTEGER, // Ubah ke INTEGER, karena jumlah produk seharusnya berupa angka
        allowNull: false
    },
    Totalharga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { tableName: "cart" });

export default Cart;

// 🔗 Relasi setelah ekspor model
Cart.belongsToMany(Order, { through: Kwitansi, foreignKey: "CartId" });
Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });

Product.hasMany(Cart, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Cart.belongsTo(Product, { foreignKey: "ProductId", onDelete: "CASCADE", onUpdate: "CASCADE" });

Buyer.hasMany(Cart, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Cart.belongsTo(Buyer, { foreignKey: "BuyerId", onDelete: "CASCADE", onUpdate: "CASCADE" });

Shop.hasMany(Cart, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Cart.belongsTo(Shop, { foreignKey: "ShopId", onDelete: "CASCADE", onUpdate: "CASCADE" });
