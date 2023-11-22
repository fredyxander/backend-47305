import express from "express";
import { config } from "./config/config.js";
import { transporter } from "./config/gmail.js";

const port = config.server.port;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

const emailTemplate = (user)=> `
    <div>
        <h1>Bienvenido ${user}!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Ahora inicia sesión</a>
    </div>
`;

app.post("/send-mail", async(req,res)=>{
    try {
        const result = await transporter.sendMail({
            from:config.gmail.account,
            to:"correo usuario",
            subject:"Tu registro ha sido exitoso",
            html: emailTemplate("fredy")
        });
        console.log(result);
        res.json({status:"success", message:"correo enviado"});
    } catch (error) {
        console.log(error);
        res.json({status:"error", message:"Hubo un error al enviar el correo"})
    }
});