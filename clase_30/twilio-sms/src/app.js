import express from "express";
import { config } from "./config/config.js";
import { transporter } from "./config/gmail.js";
import path from "path";
import {__dirname} from "./utils.js";
import { twilioClient } from "./config/twilio.js";

const port = config.server.port;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

const emailTemplate = (user)=> `
    <div>
        <h1>Bienvenido ${user}!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Ahora inicia sesión</a>
        <img src="cid:pokemon"/>
    </div>
`;

app.post("/send-mail", async(req,res)=>{
    try {
        const result = await transporter.sendMail({
            from:config.gmail.account,
            to:"correo usuario",
            subject:"Tu registro ha sido exitoso",
            html: emailTemplate("Pepe"),
            attachments:[
                {
                    filename:"pokemon.jpg",
                    path:path.join(__dirname,"/assets/images/pokemon.jpg"),
                    cid:"pokemon"
                },
                {
                    filename:"terminosYCondiciones.doc",
                    path:path.join(__dirname,"/assets/documents/terminosYCondiciones.doc"),
                    cid:"terminos"
                }
            ]
        });
        console.log(result);
        res.json({status:"success", message:"correo enviado"});
    } catch (error) {
        console.log(error);
        res.json({status:"error", message:"Hubo un error al enviar el correo"})
    }
});

app.post("/send-sms", async(req,res)=>{
    try {
        const result = await twilioClient.messages.create({
            from:config.twilio.phone,
            to: process.env.USER_PHONE,//"+543489382283883"
            body:"Su pedido fue realizado correctamente"
        });
        console.log(result);
        res.json({status:"success", message:"Envio de mensaje exitoso"});
    } catch (error) {
        console.log(error);
        res.json({status:"error", message:"Hubo un error al enviar el mensaje de texto"})
    }
})