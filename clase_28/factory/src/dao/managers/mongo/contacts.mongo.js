import { contactsModel } from "../../models/contacts.model.js";

export class ContactsMongo{
    constructor(){
        this.model = contactsModel;
    };

    async create(contactInfo){
        const contactCreated = await this.model.create(contactInfo);
        return "Contacto creado";
    };

    async getAll(){
        const contacts = await this.model.find();
        return contacts;
    };

    async getOne(id){
        const contact = await this.model.findById(id);
        return contact;
    };

    update(){};
    delete(){};
}