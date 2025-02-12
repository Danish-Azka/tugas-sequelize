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
    const { nama, email, password, confPassword } = req.body
    if (!nama || !email || !password || !confPassword) res.status(400, res, 'pastikan semua terisi').json()
    else {
        if (password !== confPassword) res.status(400, res, 'password dan confirm password tidak cocok')
        else {
            const resultHash = await hashData(password)
            try {
                await Admin.create(
                    {
                        nama,
                        email,
                        password: resultHash
                    }
                )
                res.status(201, res, 'Register Berhasil')
            } catch (err) {
                res.status(500, res, err.message)
            }
        }
    }

}

export const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({
            where: {
                email: req.body.email
            }
        })
        if (admin !== null) {

            const match = req.body.password === admin.password
            console.log(match)
            if (!match) {
                console.log('password')
                res.status(400).json("password salah")
            }else {
                const adminId = admin.id
                const email = admin.email
                const password = admin.password

            //? payload
            const accessToken = jwt.sign({ adminId, email, password }, process.env.SECRET_ACCESS_TOKEN, {
                expiresIn: '1h'
            })
            const refreshToken = jwt.sign({ adminId, email, password }, process.env.SECRET_REFRESH_TOKEN, {
                expiresIn: '1d'
            })

            console.log(accessToken)
            //? simpan refresh token dalam database
            await Admin.update({ refresh_token: refreshToken }, {
                where: {
                    id: adminId
                }
            })
            
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                
            })
            

            res.json({ accessToken })
        }
        } else {

            res.status(500).json("Email belum terdaftar")
        }
    } catch (err) {
        res.status(500).json(err)

    }
}

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



