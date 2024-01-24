import { Router } from "express";
import { PaymentsService } from "../services/payments.service.js";

const router = Router();

const mockCart = [
    { id: 1, name: "papas", price: 1000 },
    { id: 2, name: "queso", price: 500 },
    { id: 3, name: "hamburguesa", price: 1500 },
    { id: 4, name: "soda", price: 1000 },
    { id: 5, name: "golosinas", price: 800 }
];

// http://localhost:8080/api/payments/payment-intents?id=2
router.post("/payment-intents", async(req,res)=>{
    try {
        const productId = parseInt(req.query.id);
        const product = mockCart.find(p=>p.id === productId);
        if(!product){
            return res.status(400).json({status:"error", error:"Producto no encontrado"});
        }
        //generamos la informacion de la compra
        const paymentInfo = {
            amount:product.price,
            currency: "usd"
        };
        const service = new PaymentsService();
        const resultPaymentIntent = await service.createPaymentIntent(paymentInfo);
        console.log("resultPaymentIntent",resultPaymentIntent);
        res.json({status:"success", payload:resultPaymentIntent});
    } catch (error) {
        return res.status(400).json({status:"error", error:error.message});
    }
});

export { router as paymentsRouter}