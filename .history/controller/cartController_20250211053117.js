import Cart from "../cart.js";
import Shop from "../models/shopModels.js";

export const createCart= async (req, res) => {
    try{
        const {jumlah, totalHarga,Id } = req.body;
        const product = await Cart.create({jumlah, totalHarga,Id });
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getCart = async (req, res) => {
    try{
        const product = await Cart.findAll({
          include: [

              {
                  model: Shop,
                  as : 'Shop',
                  required: true
                }
                
            ]
            })
        res.status(200).json(product)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getCartById = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Cart.findByPk(id);
        if (!product) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(product)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getCartByShopId = async (req, res) => {
    try {
        const { ShopId } = req.params;
        const products = await Cart.findAll({
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
        const {jumlah, totalHarga,Id} = req.body;
        const product = await Cart.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Cart tidak ditemukan' });
        }
        await Cart.update({jumlah, totalHarga,Id}, {
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
        const product = await Cart.findByPk(id);
        if (!product) {
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

