const sendRequestBtn = document.getElementById("sendRequestBtn");

sendRequestBtn.addEventListener("click", async()=>{
    try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();
        console.log("data", data);
    } catch (error) {
        console.log(error.message);
    }
});