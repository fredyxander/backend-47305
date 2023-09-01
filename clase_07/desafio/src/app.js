import express from "express";

const port = 8080;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})

let frase = "frase inicial";


app.get("/api/frase",(req,res)=>{
    res.json({status:"success", message:frase});
});


app.get("/api/frase/:pos",(req,res)=>{
    const pos = parseInt(req.params.pos);
    const palabras = frase.split(" ");
    res.json({status:"success", searched:palabras[pos-1]});
});


app.post("/api/palabras",(req,res)=>{
    const palabra = req.body.palabra;
    const palabras = frase.split(" ");
    palabras.push(palabra);
    frase = palabras.join("");
    res.json({
        agregada:palabra,
        pos:palabras.length
    });
});


app.put("/api/palabras/:pos",(req,res)=>{
    const pos = parseInt(req.params.pos);
    const palabra = req.body.palabra;
    const palabras = frase.split(" ");
    const anterior = palabras[pos-1];
    palabras[pos-1]=palabra;
    frase = palabras.join("");
    res.json({
        actualizada:palabra,
        anterior:anterior
    });
});


app.delete("/api/palabras/:pos",(req,res)=>{
    const pos = parseInt(req.params.pos);
    const palabras = frase.split(" ");
    palabras.splice(parseInt(pos-1), 1);
    frase = palabras.join("");
    res.json({
        message:"world deleted",
        frase
    });
});

