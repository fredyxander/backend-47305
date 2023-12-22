import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { swaggerSpecs } from './config/swagger.config.js';
import swaggerUI from "swagger-ui-express";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`url mongo`);
console.log("base de datos conectada");

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/docs", swaggerUI.serve , swaggerUI.setup(swaggerSpecs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
