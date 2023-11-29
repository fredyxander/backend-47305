import express from "express";
import compression from "express-compression";

const port = 8080;
const app = express();

// app.use(compression());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.get("/ruta-normal", (req,res)=>{
    res.send("coderhouse".repeat(100000));
});

app.get("/ruta-gzip", compression() , (req,res)=>{
    res.send("coderhouse".repeat(100000));
});

app.get("/ruta-brotli", compression({
    brotli:{enabled:true, zlib:{}}
}) , (req,res)=>{
    res.send("coderhouse".repeat(200000));
});