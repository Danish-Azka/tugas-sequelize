import express from "express"
import "./models/index.js"
import cors from "cors";
import { clientRoute } from "./routes/clientRoute.js"
import { karyawanRoute } from "./routes/karyawanRoute.js"
import { transaksiRoute } from "./routes/transaksiRoute.js";
import { mobilRoute } from "./routes/mobilRoute.js";
import bodyParser from "body-parser";
import { pengembalianRoute } from "./routes/pengembalianRoute.js";
import { adminRoute } from "./routes/adminRoute.js";

const port = process.env.PORT

const app = express()

app.use(cors());
app.use(bodyParser.json())


app.use(clientRoute)
app.use(karyawanRoute)
app.use(transaksiRoute)
app.use(mobilRoute)
app.use(pengembalianRoute)
app.use(adminRoute)

app.listen(port, () => {
    console.log("mission statooo")
})