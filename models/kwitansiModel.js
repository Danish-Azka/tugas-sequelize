import { DataTypes } from "sequelize";
import db from '../utils/connection.js';

const Kwitansi = db.define("Kwitansi", {}, { tableName: "kwitansi" });

export default Kwitansi;
