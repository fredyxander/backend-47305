import express from "express";
import {studentsModel} from "./models/students.model.js";
import mongoose from "mongoose";
import {engine} from "express-handlebars";
import path from "path";
import {__dirname} from "./utils.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Servidor ok"));

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

try {
    await mongoose.connect("URL MONGO");
    console.log("base de datos conectada");
} catch(e){
    console.log(e)
}

//routes
app.get("/", async(req,res)=>{
    try {
        const {page}= req.query;
        const result = await studentsModel.paginate({},{limit:5,page:parseInt(page),lean:true});
        console.log(result);
        res.render("home", result);
    } catch (error) {
        res.send(error.message);
    }
});