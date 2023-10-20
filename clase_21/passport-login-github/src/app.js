import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";
import { connectDB } from "./config/dbConnection.js";
import passport from "passport";
import { initializePassport } from "./config/passport.config.js";
import { config } from "./config/config.js";

import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server listening on port ${port}`));

connectDB();

//configuración del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

// configuración de session
app.use(session({
    store: MongoStore.create({
        ttl:3000,
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

//configurar passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(viewsRouter);
app.use("/api/sessions", sessionsRouter);