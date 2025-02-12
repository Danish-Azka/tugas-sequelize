import Product from "../models/productModel.js";

export const createProduct= async (req, res) => {
    try{
        const {email, nama , pasword, } = req.body;
        const shop = await Product.create({email, nama , pasword, });
        res.status(201).json(shop)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getProduct = async (req, res) => {
    try{
        const shop = await Product.findAll()
        res.status(200).json(shop)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const shop = await Product.findByPk(id);
        if (!shop) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(shop)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {email, nama , pasword } = req.body;
        const shop = await Product.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Product tidak ditemukan' });
        }
        await Product.update({email, nama , pasword }, {
            where: { id }
        });
        const updatedProduct = await Product.findByPk(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await Product.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Product tidak ditemukan' });
        }
        await Product.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Product berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

