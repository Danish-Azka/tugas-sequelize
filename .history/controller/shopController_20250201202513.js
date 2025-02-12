import Shop from "../models/karyawanModel.js";

export const createShop= async (req, res) => {
    try{
        const { nama, noTelp, email, divisi} = req.body;
        const karyawan = await Shop.create({ nama, noTelp, email, divisi});
        res.status(201).json(karyawan)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getShop = async (req, res) => {
    try{
        const karyawan = await Shop.findAll()
        res.status(200).json(karyawan)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getShopById = async (req, res) => {
    try{
        const { id } = req.params;
        const karyawan = await Shop.findByPk(id);
        if (!karyawan) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(karyawan)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getShopByDivisi = async (req, res) => {
    try{
        const { divisi } = req.params;
        const karyawan = await Shop.findAll({where : {divisi : divisi}});
        if (!karyawan) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(karyawan)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}



export const updateShop = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, noTelp, email } = req.body;
        const karyawan = await Shop.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: 'Shop tidak ditemukan' });
        }
        await Shop.update({ nama, noTelp, email }, {
            where: { id }
        });
        const updatedShop = await Shop.findByPk(id);
        res.status(200).json(updatedShop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteShop = async (req, res) => {
    try {
        const { id } = req.params;
        const karyawan = await Shop.findByPk(id);
        if (!karyawan) {
            return res.status(404).json({ message: 'Shop tidak ditemukan' });
        }
        await Shop.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Shop berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

