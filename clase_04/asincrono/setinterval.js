const contador = ()=>{
    let counter = 0;
    const interval = setInterval(()=>{
        counter++;
        console.log(new Date());
        console.log("counter", counter);
        if(counter>=5){
            clearInterval(interval)
        }
    },1000)
};

contador();
console.log("inicio tarea")