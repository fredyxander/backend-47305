import {app} from "../src/app.js";
import { expect } from "chai";
import supertest from "supertest";
import petModel from "../src/dao/models/Pet.js";

const requester = supertest(app);//Elemento para hacer peticiones http

describe("Pruebas app mascotas", function(){
    describe("Pruebas para los endpoints de mascotas", function(){

        beforeEach(async function(){
            await petModel.deleteMany({});
        });

        it("El endpoint POST /api/pets crea una mascota correctamente", async function(){
            const pet = {
                name:"Patitas",
                specie:"Perro",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(pet);
            // console.log(response);
            expect(response.body.status).to.be.equal("success");
            expect(response.body.payload).to.have.property("_id");
        });

        it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false", async function(){
            const pet = {
                name:"Patitas",
                specie:"Perro",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(pet);
            expect(response.body.payload).to.have.property("adopted");
            expect(response.body.payload.adopted).to.be.equal(false);
        });

        it("Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400.", async function(){
            const pet = {
                specie:"Perro",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(pet);
            // console.log(response);
            expect(response.body.status).to.be.equal("error");
            expect(response.status).to.be.equal(400);
        });

        it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async function(){
            const response = await requester.get("/api/pets");
            expect(response.body).to.have.property("status");
            expect(response.body).to.have.property("payload");
            expect(Array.isArray(response.body.payload)).to.be.equal(true);
        });

        it("El método DELETE debe poder borrar la última mascota agregada, ésto se puede alcanzar agregando a la mascota con un POST, tomando el id, borrando la mascota  con el DELETE, y luego corroborar si la mascota existe con un GET", async function(){
            const pet = {
                name:"Pelusa",
                specie:"Gato",
                birthDate:"01-01-2020"
            };
            const responseCreate = await requester.post("/api/pets").send(pet);
            const petId = responseCreate.body.payload._id;
            const responseDelete = await requester.delete(`/api/pets/${petId}`);
            expect(responseDelete.body.message).to.be.equal("pet deleted");
            const responseAll = await requester.get("/api/pets");
            expect(responseAll.body.payload).to.be.deep.equal([]);
        });

        it("El endpoint /api/pets/withimage, permite crear una mascota con imagen", async function(){
            const pet = {
                name:"Tony",
                specie:"Perro",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets/withimage")
            .field("name", pet.name)
            .field("specie", pet.specie)
            .field("birthDate", pet.birthDate)
            .attach("image", "./test/images/perro.jpg")
            expect(response.body.status).to.be.equal("success");
        });
    });
});