import { config } from "../config/config.js";
let contactsDao;
let productsDao;
let cartsDao;
const persistence = config.server.persistence;

switch(persistence){
    case "memory":{
        const {ContactsMemory} = await import("./managers/memory/contacts.memory.js");
        // const {ProductsMemory} = await import("./managers/memory/products.memory.js");
        contactsDao = new ContactsMemory();
        // productsDao = new ProductsMemory();
        break;
    }
    case "mongo":{
        const {connectDB} = await import("../config/dbConnection.js");
        connectDB();
        const {ContactsMongo} = await import("./managers/mongo/contacts.mongo.js");
        // const {ProductsMongo} = await import("./managers/memory/products.mongo.js");
        contactsDao = new ContactsMongo();
        // productsDao = new ProductsMongo();
        break;
    }
    // case "sql":{}
};

export {contactsDao, productsDao, cartsDao};