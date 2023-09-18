const socketClient = io();

//elementos
const productList = document.getElementById("productList");
const createProductForm = document.getElementById("createProductForm");

//Enviamos info del formulario al socket del servidor
createProductForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(createProductForm);
    // console.log(formData.get("title"))
    const jsonData = {};
    for(const [key,value] of formData.entries()){
        jsonData[key]=value
    };
    const reader = new FileReader();
    reader.onload = function(){
        jsonData.price = parseInt(jsonData.price);
        jsonData.imageName = jsonData.thumbnail.name;
        jsonData.imageBuffer = reader.result
        // console.log('jsonData',jsonData);
        //enviamos el objeto de info del producto al socket del servidor.
        socketClient.emit("addProduct",jsonData);
    }
    const file = formData.get("thumbnail");
    reader.readAsDataURL(file);
    createProductForm.reset();
});

//recibimos los productos
socketClient.on("productsArray", (dataProducts)=>{
    let productsElms="";
    dataProducts.forEach(product=>{
        const imagenURI = product.imageBuffer || `/images/${product.thumbnail}`;
        productsElms +=
        `<li>
            <p>Nombre: ${product.title}</p>
            <img src="${imagenURI}">
            <button onclick="deleteProduct(${product.id})">Eliminar</button>
        </li>`
    });
    // console.log(productsElms);
    productList.innerHTML=productsElms;
});

const deleteProduct = (productId)=>{
    console.log(productId);
};