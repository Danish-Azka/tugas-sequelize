import Buyer from "../models/buyer.js";
import Cart from "../models/cart.js";
import Shop from "../models/shopModels.js";

export const createCart= async (req, res) => {
    try{
        const {jumlah, Totalharga, BuyerId, ProductId, ShopId } = req.body;
        const cart = await Cart.create({jumlah, Totalharga, BuyerId, ProductId, ShopId });
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getCart = async (req, res) => {
    try{
        const cart = await Cart.findAll({
            include: [

                {
                    model: Shop,
                    as : 'Shop',
                    required: true
                  },
                {
                    model: Buyer,
                    as : 'Buyer',
                    required: true
                  }
                  
              ]
        })
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
export const getProductByShopId = async (req, res) => {
    try {
        const { ShopId } = req.params;
        const products = await Product.findAll({
            where: { ShopId: ShopId }
        });

        if (products.length === 0) {
            return res.status(404).json({ message: 'Tidak ada produk untuk ShopId ini' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const {jumlah, Totalharga, BuyerId, ProductId, ShopId} = req.body;
        const cart = await Cart.findByPk(id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart tidak ditemukan' });
        }
        await Cart.update({jumlah, Totalharga, BuyerId, ProductId, ShopId}, {
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

