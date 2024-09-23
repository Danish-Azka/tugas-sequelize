import Admin from '../models/adminModel.js'

export const createAdmin= async (req, res) => {
    try{
        const { nama, email, password} = req.body;
        const admin = await Admin.create({ nama, email, password});
        res.status(201).json(admin)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

export const getAdminById = async (req, res) => {
    try{
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({message: 'ga ada'});
        res.status(200).json(admin)
    } catch (error){
        res.status(500).json({error : error.message})
    }
}

export const getAdmin = async (req, res) => {
    try{
        const admin = await Admin.findAll({
         
        })
        res.status(200).json(admin)
    }catch (error){
        res.status(500).json({ error : error.message})
    }
};
