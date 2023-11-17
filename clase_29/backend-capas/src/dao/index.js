import { BusinessMongo } from "./managers/mongo/business.mongo.js";
import { UsersMongo } from "./managers/mongo/users.mongo.js";
import { OrdersMongo } from "./managers/mongo/orders.mongo.js";

export const businessDao = new BusinessMongo();
export const usersDao = new UsersMongo();
export const ordersDao = new OrdersMongo();