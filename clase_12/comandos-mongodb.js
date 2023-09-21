show dbs;
use tiendaFlores;
db;
db.createCollection('productos');
db.createCollection('usuarios');
show collections;
db.productos.insertOne({nombre:'Rosas', precio:200});
db.productos.insertMany([{nombre:'Violetas', precio:150},{nombre:'Girasoles', precio:300}]);
db.productos.find();



//desafio
show dbs;
use colegio;
db.createCollection('estudiantes');
db.estudiantes.insertMany([{nombre:'pepe', edad:20, correo:'pep@gmail.com'},{nombre:'laura', edad:23, correo:'laura@gmail.com'},{nombre:'Camila', edad:33, correo:'camila@gmail.com'}]);
db.estudiantes.find();