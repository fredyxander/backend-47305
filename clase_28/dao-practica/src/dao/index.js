import { ContactsMemory } from "./managers/memory/contacts.memory.js";
import { ContactsMongo } from "./managers/mongo/contacts.mongo.js";

export const contactsDao = new ContactsMemory();
// export const contactsDao = new ContactsMongo();