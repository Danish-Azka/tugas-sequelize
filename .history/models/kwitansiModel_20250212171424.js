import { DataTypes } from "sequelize";
import db from '../utils/connection.js';

const Kwitansi = db.define("Kwitansi", {}, { tableName: "kwitansi" });

(async () => {
    const { default: Order } = await import("./orderModel.js");
    const { default: Cart } = await import("./cart.js");

    Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });
    Cart.belongsToMany(Order, { through: Kwitansi, foreignKey: "CartId" });
})();

export default Kwitansi;
