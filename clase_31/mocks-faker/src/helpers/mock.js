import {faker} from "@faker-js/faker";

const { database, commerce, random, image, name, internet, datatype } = faker;

//funcion para generar un producto
export const generateProduct = ()=>{
    return {
        id: database.mongodbObjectId(),
        title: commerce.product(),
        price: parseFloat(commerce.price()),
        stock: parseInt(random.numeric(2)),
        image: image.imageUrl(),
        code: random.alphaNumeric(5),
        description: commerce.productDescription(),
    }
};
// console.log(generateProduct());

//funcion para generar un usuario
export const generateUser = ()=>{
    const numberOfProducts=parseInt(random.numeric(1));
    let products = [];
    for(let i=0;i<numberOfProducts;i++){
        const newProduct = generateProduct();
        products.push(newProduct);
    };
    // console.log(products);
    return {
        id:database.mongodbObjectId(),
        first_name:name.firstName(),
        last_name:name.lastName(),
        email: internet.email(),
        role: datatype.boolean() ? "customer" : "salesPerson",
        isPremium: datatype.boolean(),
        jobTitle: name.jobTitle(),
        cart:products
    };
};

// console.log(generateUser());