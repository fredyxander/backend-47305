import { ContactsRepository } from "./contacts.repository.js";
import {contactsDao} from "../dao/factory.js";

export const contactsService = new ContactsRepository(contactsDao);