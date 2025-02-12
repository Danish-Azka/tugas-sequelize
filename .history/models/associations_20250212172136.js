import Cart from "./cart.js";
import Order from "./orderModel.js";
import Kwitansi from "./kwitansi.js";

// 🔗 Definisikan asosiasi setelah semua model diekspor
Cart.belongsToMany(Order, { through: Kwitansi, foreignKey: "CartId" });
Order.belongsToMany(Cart, { through: Kwitansi, foreignKey: "OrderId" });
