const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const info = {
        name:e.target.name.value,
        email:e.target.email.value
    };
    //Enviamos la peticion al servidor
    fetch("/login",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(info)
    }).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
        //guardar el token en el localstorage
        localStorage.setItem('token',data.accessToken);
    });
});