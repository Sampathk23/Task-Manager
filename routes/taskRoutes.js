// const express = require("express")
// const {createTask,postTask} = require("../controllers/taskController")
// let taskRouter = express.Router()

// //ROUTE TO CREATE TASK
// taskRouter.get("/task",createTask)
// //ROUTE TO POST TASK
// taskRouter.post("/task",postTask)

// module.exports=taskRouter;

// // http://localhost:5000/task-manager/task


const express = require("express")
const {getTasks,postTask,getTask, deleteTask,updateTask} = require("../controllers/taskController")
let taskRouter = express.Router()

// //ROUTE TO CREATE TASK
// taskRouter.get("/task",getTask)
// //ROUTE TO POST TASK
// taskRouter.post("/task",postTask)
// //ROUTE TO UPDATE TASK
// taskRouter.put("/task/:id",updateTask)

// module.exports=taskRouter;

// http://localhost:5000/task-manager/task


//ROUTE TO CREATE TASK
taskRouter.get("/task",getTasks)
//ROUTE TO POST TASK
taskRouter.post("/task",postTask)
//get one TASK to update
taskRouter.get("/task/:id",getTask)
//update one task
taskRouter.put("/task/:id",updateTask)
//to delete task
taskRouter.delete("/task/:id",deleteTask)


module.exports=taskRouter;