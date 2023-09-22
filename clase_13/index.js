show dbs;
use colegio;
db.estudiantes.insertMany([{ "nombre" : "Pablo", "edad" : 25 },
{ "nombre" : "Juan", "edad" : 22 },
{ "nombre" : "Lucia", "edad" : 25 },
{ "nombre" : "Juan", "edad" : 29 },
{ "nombre" : "Fede", "edad" : 35 }
]);
db.estudiantes.find().sort({edad:1}).skip(1).limit(1);
db.estudiantes.find({nombre:"Juan", edad:29})
db.estudiantes.updateOne({nombre:"Fede"},{$set:{edad:36}});
db.estudiantes.updateMany({edad:25},{$set:{edad:26}});
db.estudiantes.find();
db.estudiantes.deleteOne({nombre:"Juan"});
db.estudiantes.find();
db.estudiantes.deleteMany({});
db.estudiantes.find();