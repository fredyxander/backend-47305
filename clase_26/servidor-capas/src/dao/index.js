import { ToysMemory } from "./managers/memory/toys.memory.js";
import { UsersMemory } from "./managers/memory/users.memory.js";

//capa de persistencia para los juguetes
export const toysDao = new ToysMemory();

export const usersDao = new UsersMemory();