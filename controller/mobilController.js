import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";

export const createMobil= async (req, res) => {
    try{
        const { merk, model, platNomor, kapasitasPenumpang, harga, gambar,ClientId } = req.body;
        const mobil = await Mobil.create({ merk, model, platNomor, kapasitasPenumpang, harga, gambar,ClientId });
        res.status(201).json(mobil)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getMobil = async (req, res) => {
    try{
        const mobil = await Mobil.findAll({
            include : {
                model: Client,
                as: "Client",
            }
        })
        res.status(200).json(mobil)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getMobilById = async (req, res) => {
    try{
        const { id } = req.params;
        const mobil = await Mobil.findByPk(id);
        if (!mobil) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(mobil)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateMobil = async (req, res) => {
    try {
        const { id } = req.params;
        const { merk, model, platNomor, kapasitasPenumpang, harga, gambar,ClientId  } = req.body;
        const mobil = await Mobil.findByPk(id);
        if (!mobil) {
            return res.status(404).json({ message: 'mobil tidak ditemukan' });
        }
        await mobil.update({ merk, model, platNomor, kapasitasPenumpang, harga, gambar,ClientId  }, {
            where: { id }
        });
        const updatedMobil = await Mobil.findByPk(id);
        res.status(200).json(updatedMobil);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

export const deleteMobil = async (req, res) => {
    try {
        const { id } = req.params;
        const mobil = await Mobil.findByPk(id);
        if (!mobil) {
            return res.status(404).json({ message: 'mobil tidak ditemukan' });
        }
        await mobil.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'mobil berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};