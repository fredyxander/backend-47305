const profileBtn = document.getElementById("profileButton");

profileBtn.addEventListener("click",()=>{
    fetch("/profile",{
        method:"get",
        headers:{
            "Content-type":"application/json",
        },
    }).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
        // //guardar el token en el localstorage
        // localStorage.setItem('token',data.accessToken);
    });
});