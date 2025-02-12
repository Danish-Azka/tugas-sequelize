import B from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";


export const createB= async (req, res) => {
    try{
        const { nama, email, password, saldo} = req.body;
        const client = await B.create({ nama, email, password, saldo});
        res.status(201).json(client)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getBById = async (req, res) => {
    try{
        const { id } = req.params;
        const client = await B.findByPk(id);
        if (!client) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(client)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getB = async (req, res) => {
    try{
        const client = await B.findAll()
        res.status(200).json(client)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const updateB = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, email, password, saldo } = req.body;
        const client = await B.findByPk(id);
        if (!client) {
            return res.status(404).json({ message: 'client tidak ditemukan' });
        }
        await client.update({ nama, email, password, saldo }, {
            where: { id }
        });
        const updatedB = await B.findByPk(id);
        res.status(200).json(updatedB);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteB = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await B.findByPk(id);
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

