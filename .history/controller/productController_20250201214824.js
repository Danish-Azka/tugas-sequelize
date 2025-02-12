import Product from "../models/productModel.js";

export const create= async (req, res) => {
    try{
        const {email, nama , pasword, } = req.body;
        const shop = await .create({email, nama , pasword, });
        res.status(201).json(shop)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const get = async (req, res) => {
    try{
        const shop = await .findAll()
        res.status(200).json(shop)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const shop = await .findByPk(id);
        if (!shop) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(shop)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const {email, nama , pasword } = req.body;
        const shop = await .findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: ' tidak ditemukan' });
        }
        await .update({email, nama , pasword }, {
            where: { id }
        });
        const updated = await .findByPk(id);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const delete = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await .findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: ' tidak ditemukan' });
        }
        await .destroy({
            where: { id }
        });
        res.status(200).json({ message: ' berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

