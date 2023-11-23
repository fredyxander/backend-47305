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
    jsonData.price = parseInt(jsonData.price);
    console.log(jsonData);
    //enviamos el objeto de info del producto al socket del servidor.
    socketClient.emit("addProduct",jsonData);
    createProductForm.reset();
});



//recibimos los productos
socketClient.on("productsArray", (dataProducts)=>{
    console.log(dataProducts);
    let productsElms="";
    dataProducts.forEach(product=>{
        productsElms +=
        `<li>
            <p>Nombre: ${product.title}</p><button onclick="deleteProduct(${product.id})">Eliminar</button>
        </li>`
    });
    // console.log(productsElms);
    productList.innerHTML=productsElms;
});

const deleteProduct = (productId)=>{
    console.log(productId);
};