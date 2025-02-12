import Cart from "../models/cart.js";

export const createCart= async (req, res) => {
    try{
        const {jumlah, TotalHarga, BuyerId, ProductId } = req.body;
        const cart = await Cart.create({jumlah, TotalHarga, BuyerId, ProductId });
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getCart = async (req, res) => {
    try{
        const cart = await Cart.findAll()
        res.status(200).json(cart)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getCartById = async (req, res) => {
    try{
        const { id } = req.params;
        const cart = await Cart.findByPk(id);
        if (!cart) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(cart)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}


export const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const {jumlah, TotalHarga, BuyerId, ProductId} = req.body;
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart tidak ditemukan' });
        }
        await Cart.update({jumlah, TotalHarga, BuyerId, ProductId}, {
            where: { id }
        });
        const updatedCart = await Cart.findByPk(id);
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart tidak ditemukan' });
        }
        await Cart.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Cart berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

