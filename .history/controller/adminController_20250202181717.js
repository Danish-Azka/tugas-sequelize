import Admin from '../models/adminModel.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const createAdmin= async (req, res) => {
    try{
        const { nama, email, password, photo} = req.body;
        const admin = await Admin.create({ nama, email, password, photo});
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

export const registerAdmin = async (req, res) => {
    const { nama, email, password, confPassword } = req.body;
    if (!nama || !email || !password || !confPassword) {
        return res.status(400).json({ message: 'Pastikan semua terisi' });
    }
    if (password !== confPassword) {
        return res.status(400).json({ message: 'Password dan Confirm Password tidak cocok' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await Admin.create({
            nama,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'Register Berhasil' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ where: { email: req.body.email } });
        if (!admin) return res.status(404).json({ message: "Email belum terdaftar" });

        // Verifikasi password
        const match = await bcrypt.compare(req.body.password, admin.password);
        if (!match) return res.status(400).json({ message: "Password salah" });

        const adminId = admin.id;
        const email = admin.email;

        const accessToken = jwt.sign({ adminId, email }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: '1h' });
        const refreshToken = jwt.sign({ adminId, email }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: '1d' });

        await Admin.update({ refresh_token: refreshToken }, { where: { id: adminId } });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });  // Kirim dengan nama yang benar
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const logoutAdmin = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) res.status(204).json({ messgae: 'not Content' })
    const admin = await Admin.findOne({
        where: {
            refresh_token: refreshToken
        }
    })
    if (!admin) res.status(204).json({ messgae: 'not Content' })

    const adminId = admin.id
    await Admin.update({ refresh_token: null }, {
        where: {
            id: adminId
        }
    })
    res.clearCookie('refreshToken')
    res.status(200, res, 'berhasil logout')
}



