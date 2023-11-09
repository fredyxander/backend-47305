import { MongoSingleton } from "./mongoSingleton.js";

const firstInstance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thridInstance = MongoSingleton.getInstance();
const fourthInstance = new MongoSingleton();