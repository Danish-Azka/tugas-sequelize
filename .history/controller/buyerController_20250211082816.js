import Buyer from "../models/buyer.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";


export const createBuyer= async (req, res) => {
    try{
        const { nama, email, password, saldo} = req.body;
        const client = await Buyer.create({ nama, email, password, saldo});
        res.status(201).json(client)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getBuyerById = async (req, res) => {
    try{
        const { id } = req.params;
        const client = await Buyer.findByPk(id);
        if (!client) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(client)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getBuyer = async (req, res) => {
    try{
        const client = await Buyer.findAll()
        res.status(200).json(client)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const updateBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, email, password, saldo } = req.body;
        const client = await Buyer.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'client tidak ditemukan' });
        }
        await client.update({ nama, email, password, saldo }, {
            where: { id }
        });
        const updatedBuyer = await Buyer.findByPk(id);
        res.status(200).json(updatedBuyer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Buyer.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'client tidak ditemukan' });
        }
        await client.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'client berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

