import express from "express"
import { createTransaksi, getTransaksi } from "../controller/transaksiController.js";
const transaksiRoute = express.Router();

transaksiRoute.post("/transaksi/post", createTransaksi)
transaksiRoute.get("/transaksi/get", getTransaksi)

export{transaksiRoute}