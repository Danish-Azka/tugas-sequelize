import Order from "../models/orderModel.js";
import Cart from "../models/cart.js";

export const createOrder = async (req, res) => {
  try {
    const { cartIds, totalPembayaran, metodeBayar } = req.body;

    if (!cartIds || cartIds.length === 0) {
      return res.status(400).json({ message: "Cart tidak boleh kosong" });
    }

    const order = await Order.create({ totalPembayaran, metodeBayar });

    const carts = await Cart.findAll({ where: { id: cartIds } });

    if (carts.length === 0) {
      return res.status(404).json({ message: "Cart tidak ditemukan" });
    }

    await order.addCarts(carts);

    res.status(201).json({ message: "Order berhasil dibuat", order });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: { model: Cart, through: { attributes: [] } },
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: { model: Cart, through: { attributes: [] } },
    });

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { totalPembayaran, metodeBayar } = req.body;
    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    await order.update({ totalPembayaran, metodeBayar });

    res.status(200).json({ message: "Order berhasil diperbarui", order });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    await order.destroy();
    res.status(200).json({ message: "Order berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};
