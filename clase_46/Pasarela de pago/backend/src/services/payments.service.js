import Stripe from "stripe";
import { config } from "../config/config.js";

export class PaymentsService{
    constructor(){
        this.stripe = new Stripe(config.stripe.secretKey);
    };

    async createPaymentIntent(data){
        const paymentIntent = this.stripe.paymentIntents.create(data);
        return paymentIntent;
    };
};