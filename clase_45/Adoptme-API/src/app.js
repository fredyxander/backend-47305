import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
dotenv.config();

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(process.env.MONGO_URL);
console.log("base de datos contectada");

app.use(express.json());
app.use(cookieParser());

app.get("/", (req,res)=>{
    res.send("Bienvenidos a la pagina de mascotas");
})

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
