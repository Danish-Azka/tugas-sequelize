import Shop from "../models/shopModels";

export const createShop= async (req, res) => {
    try{
        const { , batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId} = req.body;
        const shop = await Shop.create({ , batasPeminjaman, durasiSewa, totalBiaya, MobilId , ClientId, KaryawanId});
        res.status(201).json(shop)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getShop = async (req, res) => {
    try{
        const shop = await Shop.findAll({
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
        res.status(200).json(shop)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};

export const getShopById = async (req, res) => {
    try{
        const { id } = req.params;
        const shop = await Shop.findByPk(id);
        if (!shop) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(shop)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const updateShop = async (req, res) => {
    try {
        const { id } = req.params;
        const { , batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId } = req.body;
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'shop tidak ditemukan' });
        }
        await shop.update({ , batasPeminjaman, durasiSewa, totalBiaya, MobilId, ClientId, KaryawanId }, {
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
        const shop = await Shop.findByPk(id);
        if (!shop) {
            return res.status(404).json({ message: 'shop tidak ditemukan' });
        }
        await shop.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'shop berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};