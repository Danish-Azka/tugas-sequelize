import Shop from "../models/shopModels";

export const create= async (req, res) => {
    try{
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId} = req.body;
        const transaksi = await .create({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId , ClientId, KaryawanId});
        res.status(201).json(transaksi)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const get = async (req, res) => {
    try{
        const transaksi = await .findAll({
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
        res.status(200).json(transaksi)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getById = async (req, res) => {
    try{
        const { id } = req.params;
        const transaksi = await .findByPk(id);
        if (!transaksi) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(transaksi)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId } = req.body;
        const transaksi = await .findByPk(id);
        if (!transaksi) {
            return res.status(404).json({ message: 'transaksi tidak ditemukan' });
        }
        await transaksi.update({ tanggalPeminjaman, batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId }, {
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
        const transaksi = await .findByPk(id);
        if (!transaksi) {
            return res.status(404).json({ message: 'transaksi tidak ditemukan' });
        }
        await transaksi.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'transaksi berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};