import { CreateContactDto } from "../dao/dto/createContact.dto.js";
export class ContactsRepository{

    constructor(dao){
        this.dao=dao;
    };

    async getContacts(){
        return await this.dao.getAll();
    };

    async createContact(contact){
        const contactDto = new CreateContactDto(contact);
        return this.dao.create(contactDto);
    };

    async getContact(id){
        return this.dao.getOne(id);
    };
}