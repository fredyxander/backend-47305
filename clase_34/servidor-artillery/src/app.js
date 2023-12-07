import express from "express";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.get("/sencilla",(req,res)=>{
    let sum = 0;
    for(let i=0;i<100000;i++){
        sum += i;
    }
    res.json({status:"success",result:sum});
});

app.get("/compleja",(req,res)=>{
    let sum = 0;
    for(let i=0;i<5e7;i++){//50M
        sum += i;
    }
    res.json({status:"success",result:sum});
});