const operacionCompleja = ()=>{
    let result=0;
    for(let i=0;i<5e10;i++){
        result+=i;
    }
    return result;
};

process.on("message",()=>{
    const result = operacionCompleja();
    process.send(result);
});