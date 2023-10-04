import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { studentsModel } from "./models/students.model.js";
import { coursesModel } from "./models/courses.model.js";

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port,()=>console.log('Servidor ejecutandose'));
connectDB();

const newStudents = [
    { first_name: "Juan", email: "juanperez@example.com", gender:"Masculino" },
    { first_name: "Maria", email: "mariagarcia@example.com", gender:"Fememino" },
    { first_name: "Pedro", email: "pedromartinez@example.com", gender:"Masculino" },
    { first_name: "Ana", email:"anarodriguez@example.com", gender:"Fememino" },
    { first_name: "Luis", email: "luissanchez@example.com", gender:"Masculino" },
    { first_name: "Isabel", email: "isabelgonzalez@example.com", gender:"Fememino" },
    { first_name: "Carlos", email: "carlosgomez@example.com", gender:"Masculino" },
    { first_name: "Sofia", email: "sofiaperez@example.com", gender:"Fememino" },
    { first_name: "Ramon", email: "ramongarcia@example.com", gender:"Masculino" }
];

const newCourses = [
    {title:"Javascript"},
    {title:"Nodejs"},
    {title:"html"},
    {title:"React"},
];

//routes
app.post("/create-students", async(req,res)=>{
    try {
        const result = await studentsModel.create(newStudents);
        res.json({status:"succes", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

app.post("/create-courses", async(req,res)=>{
    try {
        const result = await coursesModel.create(newCourses);
        res.json({status:"succes", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

app.put("/addStudent", async(req,res)=>{
    try {
        const {studentId, courseId} = req.body;
        const course = await coursesModel.findById(courseId);
        course.courseStudents.push(studentId);
        const result = await coursesModel.findByIdAndUpdate(courseId, course , {new:true});
        res.json({status:"succes", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

app.get("/course/:courseId", async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        const result = await coursesModel.findById(courseId);
        res.json({status:"succes", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

app.get("/course-populate/:courseId", async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        const result = await coursesModel.findById(courseId).populate("courseStudents");
        res.json({status:"succes", data:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});