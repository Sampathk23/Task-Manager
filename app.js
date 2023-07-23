const express = require("express")
const mongoose = require("mongoose")
const {engine} = require("express-handlebars")     /*express-handlebars is nothing but a templating engine*/
const taskRouter = require("./routes/taskRoutes")
const methodOverride = require('method-override')
let app =express()
let PORT=5000;


async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Task-manager")
    console.log("MongoDB connected");
}
db()

//inbuilt middelwares
app.use(express.static("public"))

//to use the form data
app.use(express.urlencoded({extended:false})) /* here iam making it false so that i can only recieve data in the form of string*/


app.use(methodOverride("_method"))

//mount template engine
app.engine("handlebars",engine())     /*here app.engine() is provided by express and inside engine() is from express-handlebars. here we are informing express about express-handlebars engine*/
app.set("view engine", "handlebars")


// app.get("/",(req,res)=>{
//     res.send("task manager")
// })  (this is not required when you use the below declared statements)


// "/"---root route in the case express
//"/task-manager"--root route in the case task-manager
//router-level-middleware
app.use("/task-manager",taskRouter)
// http://localhost:5000/task-manager/task



app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`server is running on ${PORT}`);
})