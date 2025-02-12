import Shop from "../models/shopModels";

export const createShop= async (req, res) => {
    try{
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId} = req.body;
        const sh = await Shop.create({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId , ClientId, KaryawanId});
        res.status(201).json(sh)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getShop = async (req, res) => {
    try{
        const sh = await Shop.findAll({
            include : [
                {
                model: Mobil,
                as : 'Mobil',
                required: true
                },{
                     model: Client,
                    as : 'Client',
                    required:true
                },{
                     model: Karyawan,
                    as : 'Karyawan',
                    required:true
                }
             
            ],
     } )
        res.status(200).json(sh)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getShopById = async (req, res) => {
    try{
        const { id } = req.params;
        const sh = await Shop.findByPk(id);
        if (!sh) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(sh)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateShop = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId } = req.body;
        const sh = await Shop.findByPk(id);
        if (!sh) {
            return res.status(404).json({ message: 'sh tidak ditemukan' });
        }
        await sh.update({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId }, {
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
        const sh = await Shop.findByPk(id);
        if (!sh) {
            return res.status(404).json({ message: 'sh tidak ditemukan' });
        }
        await sh.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'sh berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};