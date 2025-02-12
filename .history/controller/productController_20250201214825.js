import Product from "../models/productModel.js";

export const createPro= async (req, res) => {
    try{
        const {email, nama , pasword, } = req.body;
        const shop = await Pro.create({email, nama , pasword, });
        res.status(201).json(shop)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getPro = async (req, res) => {
    try{
        const shop = await Pro.findAll()
        res.status(200).json(shop)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getProById = async (req, res) => {
    try{
        const { id } = req.params;
        const shop = await Pro.findByPk(id);
        if (!shop) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(shop)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updatePro = async (req, res) => {
    try {
        const { id } = req.params;
        const {email, nama , pasword } = req.body;
        const shop = await Pro.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Pro tidak ditemukan' });
        }
        await Pro.update({email, nama , pasword }, {
            where: { id }
        });
        const updatedPro = await Pro.findByPk(id);
        res.status(200).json(updatedPro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePro = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await Pro.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'Pro tidak ditemukan' });
        }
        await Pro.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Pro berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

