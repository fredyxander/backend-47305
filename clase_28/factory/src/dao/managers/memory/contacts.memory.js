export class ContactsMemory{

    constructor(){
        this.contacts = [];
    }

    create(contactInfo){
        this.contacts.push(contactInfo);
        return "Contacto creado";
    };

    getAll(){
        return this.contacts;
    };

    getOne(id){
        const userId = parseInt(id);
        const contact = this.contacts.find(c=>c.id === userId);
        return contact;
    };

    update(){};
    delete(){};
};