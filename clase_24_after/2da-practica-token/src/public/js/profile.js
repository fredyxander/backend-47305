document.addEventListener("DOMContentLoaded",async()=>{
    const welcomeUser = document.getElementById("welcomeUser");
    const response = await fetch("/api/sessions/profile", {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
    });
    const result = await response.json();
    if(result.status === "success"){
        console.log("result", result.data);
        welcomeUser.innerHTML= `Bienvenido ${result.data.first_name}`;
    } else {
        window.location.href="/login";
    }
});