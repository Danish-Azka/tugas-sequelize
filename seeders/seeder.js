import Client from "../models/clientModel.js";
import Mobil from "../models/mobilModel.js";
import Transaksi from "../models/transaksi.js";
import Karyawan from "../models/karyawanModel.js";

const createSeeder = async () => {
    const karyawan = await Karyawan.create({
        nama: "nezadu",
        noTelp: "088988988900",
        email: "nezaduOnta@gmail.com"
    });
    // Membuat client baru
    const client = await Client.create({
        nama: "nezadu",
        noTelp: "088988988900",
        noKtp: "123456789",
        // TransaksiId : transaksi.dataValues.id
    });
    // Membuat mobil baru
    const mobil = await Mobil.create({
        merk: "Lamborghini",
        model: "aventador",
        platNomor: "B 2410 OCT",
        kapasitasPenumpang: 2,
        ClientId: client.dataValues.id
    });
    
    // Membuat transaksi baru
    const transaksi = await Transaksi.create({
        ClientId: client.dataValues.id,
        MobilId: mobil.dataValues.id,
        tanggalPeminjaman: "2024-10-24",
        batasPeminjaman: "2024-10-26",
        durasiSewa: "2 Hari",
        totalBiaya: "12.000.000",
        KaryawanId: karyawan.dataValues.id
    });
    
    // Mencari mobil berdasarkan ClientId
    const findMobilByClient = await Mobil.findAll({
        where: {
            ClientId: client.dataValues.id
        },
        attributes: ["merk", "model", "platNomor", "kapasitasPenumpang", "ClientId"],
        include: {
            model: Client,
            as: "Client",
            required: true
        }
    });
    // Mencari transaksi berdasarkan ClientId
    const findTransaksi = await Transaksi.findAll({
        where: {
            ClientId: client.dataValues.id,
            MobilId: mobil.dataValues.id,
            KaryawanId: karyawan.dataValues.id
        },
        attributes: ["tanggalPeminjaman", "batasPeminjaman", "durasiSewa", "totalBiaya","ClientId","MobilId", "KaryawanId"],
        include:[
            {
                model: Client,
                as: "Client",
                required: true
            },
            {
                model: Mobil,
                as: "Mobil",
                required: true
            },
            {
                model: Karyawan,
                as: "Karyawan",
                required: true
            },
            ]
    });
   
    const findClientByTransaksi = await Client.findAll({
        where: {
            TransaksiId: transaksi.dataValues.id
        },
        attributes: ["nama", "noTelp", "noKtp","TransaksiId"],
        include: {
            model: Transaksi,
            as: "Transaksi",
            required: true
        }
    });
    
    // Mengembalikan data
    return { findMobilByClient, findClientByTransaksi, findTransaksi };
};

// Menjalankan seeder dan memproses hasilnya
const runSeeder = async () => {
    const { findMobilByClient, findClientByTransaksi, findTransaksi } = await createSeeder();
    
    // Memproses hasil findMobilByClient
    console.log("Mobil by Client:");
    findMobilByClient.forEach(mobil => {
        console.log(mobil.dataValues); // Mengakses dataValues jika diperlukan
    });

    // Memproses hasil findTransaksiByClient
    console.log("Transaksi by Client:");
    findTransaksi.forEach(transaksi => {
        console.log(transaksi.dataValues); // Mengakses dataValues jika diperlukan
    });

    // Memproses hasil findClientByTransaksi
    console.log("Client by Transaksi:");
    findClientByTransaksi.forEach(client => {
        console.log(client.dataValues); // Mengakses dataValues jika diperlukan
    });
};

runSeeder();
