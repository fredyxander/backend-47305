import mongoose from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    name:String,
    size:String,
    price:Number,
    quantity:Number,
    date:Date
});

export const ordersModel = mongoose.model(ordersCollection,orderSchema);