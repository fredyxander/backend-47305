import express from "express";
import { connectDB } from "./config/dbConnection.js";

import { contactsRouter } from "./routes/contacts.routes.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server is listening on port ${port}`));

connectDB();

//routes
app.use("/api/contacts", contactsRouter);
