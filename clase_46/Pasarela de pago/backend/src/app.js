import express from "express";
import { paymentsRouter } from "./routes/payments.routes.js";
import cors from "cors";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port,()=>console.log(`Servidor escuchando en el puerto ${port}`));

app.use("/api/payments", paymentsRouter);