import {app} from "../src/app.js";
import { expect } from "chai";
import supertest from "supertest";
import userModel from "../src/dao/models/User.js";

const requester = supertest(app);//Elemento para hacer peticiones http

describe("Pruebas app mascotas", function(){
    describe("Modulo de sesiones", function(){
        const mockUser = {
            first_name: "Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };

        before(async function(){
            this.cookie;
            await userModel.deleteMany({});
        });

        it("El endpoint /api/sessions/register debe registrar al usuario correctamente", async function(){
            const response = await requester.post("/api/sessions/register").send(mockUser);
            expect(response.body.status).to.be.equal("success");
        });

        it("El endpoint POST /api/sessions/login permite loguear al usuario", async function(){
            const response = await requester.post("/api/sessions/login").send({
                email:mockUser.email,
                password: mockUser.password
            });
            // console.log(response);
            expect(response.body.message).to.be.equal("Logged in");
            const cookieResult = response.header['set-cookie'][0];
            // console.log(cookieResult);
            const cookieData = {
                name:cookieResult.split("=")[0],
                value: cookieResult.split("=")[1]
            };
            // console.log(cookieData);
            this.cookie=cookieData;
            expect(this.cookie.name).to.be.equal("coderCookie");
        });

        it("El endpoint /api/sessions/current permite obtener la informacion del usuario", async function(){
            const response = await requester.get("/api/sessions/current").set("Cookie",[`${this.cookie.name}=${this.cookie.value}`]);
            // console.log(response);
            expect(response.body.status).to.be.equal("success");
            expect(response.body.payload.email).to.be.equal(mockUser.email);
        });
    });
});