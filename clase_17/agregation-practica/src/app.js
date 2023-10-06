import express from "express";
import mongoose from "mongoose";
import { ordersModel } from "./models/orders.model.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Servidor ok"));

let orders = [
    {name:'Peperoni',size:'small',price:19,quantity:10,date:'2021-03-13T08:14:30Z'},
    {name:'Peperoni',size:'medium',price:20,quantity:20,date:'2021-03-13T09:13:24Z'},
    {name:'Peperoni',size:'medium',price:20,quantity:20,date:'2021-05-13T09:13:24Z'},
    {name:'Peperoni',size:'large',price:21,quantity:30,date:'2021-03-17T09:22:12Z'},
    {name:'Cheese',size:'small',price:12,quantity:15,date:'2021-03-13T11:21:39.736Z'},
    {name:'Cheese',size:'medium',price:13,quantity:50,date:'2022-01-12T21:23:13.331Z'},
    {name:'Cheese',size:'large',price:14,quantity:10,date:'2022-01-12T05:08:13Z'},
    {name:'Vegan',size:'small',price:17,quantity:10,date:'2021-01-13T05:08:13Z'},
    {name:'Vegan',size:'medium',price:18,quantity:10,date:'2021-01-13T05:10:13Z'},
    {name:'Vegan',size:'medium',price:18,quantity:10,date:'2022-01-13T05:10:13Z'},
];

const operationsDB = async()=>{
    try {
        await mongoose.connect("URL MONGO");
        console.log("base de datos conectada");

        // const result = await ordersModel.create(orders);
        // console.log(result);

        const result = await ordersModel.aggregate([
            //1 etapa(stage):filtrar las pizzas de tamaño mediano
            {
                $match:{size:"medium"}
            },
            //2 etapa:Agrupar las pizzas medianas por sabor
            {
                $group:{
                    _id:"$name",
                    totalQuantity:{$sum:"$quantity"}
                }
            },
            //3 etapa:Ordenar de mayor a menor
            {
                $sort:{totalQuantity:-1}
            },
            //4 etapa:consolidar los resultados de la etapa 3 en un solo documento
            {
                $group:{
                    _id:1,
                    orders:{$push:"$$ROOT"}
                }
            },
            //5 Etapa:
            {
                $project:{
                    _id:0,
                    orders:"$orders"
                }
            },
            //6 etapa: Subir el documento en una coleccion
            {
                $merge:{
                    into:"reports"
                }
            }
        ]);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
operationsDB();