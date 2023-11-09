const makeRequest = ()=>{
    fetch("http://localhost:8080/students", {
        method:"GET",
    })
    .then(response=>response.json())
    .then(result=>console.log(result))
    .catch(error=>console.log(error));
};