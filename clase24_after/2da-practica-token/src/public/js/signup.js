const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e.target)
    const formValues = {
        email:e.target.email.value,
        password: e.target.password.value
    };
    const response = await fetch("/api/sessions/login", {
        headers:{
            "Content-type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(formValues)
    });
    const result = await response.json();
    if(result.status === "success"){
        window.location.href="/profile"
    } else {
        errorMsg.innerHTML="No fue posible loguear el usuario";
    }
});