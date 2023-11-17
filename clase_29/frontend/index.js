const getData = async()=>{
    try {
        const response = await fetch("http://localhost:8080/api/orders");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}
