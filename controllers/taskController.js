// const createTask = (req,res)=>{
//     // res.send("create task")
//     res.render("home") /* this one you have to use for express handlebars*/
// }

// const postTask = (req,res)=>{
//     res.send("post task")
// }

// module.exports={
//     createTask,postTask
// }

// const Task = require("../models/Task")

// const getTask = async(req,res)=>{
//     try{
//       let tasks =await Task.find().lean()        /*lean() is used to convert json into eson*/
//       res.render("home",{tasks})
//     }catch(error){
//         res.status(404).json({
//             message:"No task added"
//         })
//     }
// }

// const postTask=async (req,res)=>{
//     try{
//         let {task} = req.body
//         console.log(req.body);
//         await Task.create({task:task})
//         res.redirect("/task-manager/task")
//     }catch(error){
//     console.log(error);
//     }
// }

// const updateTask = async(req,res)=>{
//    try{
//     let id = req.params.id
//    const task = await Task.findOne({id:id})
//    res.render("update",{task})
//    }catch(error){
//     console.log(error);
//    }
// }

// module.exports={
//     getTask,postTask,updateTask
// }

const Task = require("../models/Task")

const getTasks = async(req,res)=>{
    try{
      let tasks =await Task.find().lean()        /*lean() is used to convert json into eson*/
      res.render("home",{tasks})
    }catch(error){
        res.status(404).json({
            message:"No task added"
        })
    }
}

const postTask= async (req,res)=>{
    try{
        let task = req.body.task
        //if we are adding same kind of data again the below statements will execute to handle the duplicate data
        let duplicate = await Task.findOne({task:task}).lean()
        if(duplicate){
            res.json({
                message:"Task already exist"
            })
        }
        else{
        await Task.create({task:task})
        res.redirect("/task-manager/task")
    }
    }catch(error){
    console.log(error);
    }
}

const getTask = async(req,res)=>{
   try{
    let id = req.params.id  /*it takes id from the querystring*/
   const task = await Task.findOne({_id:id}).lean()
   res.status(200).render("update",{task})
   }catch(error){
    console.log(error);
   }
}

const updateTask = async (req,res)=>{
    try{
        let id=req.params.id
        let updateTask=req.body.task
        await Task.updateOne({_id:id},{$set:{task:updateTask}}).lean()
        res.status(302).redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}

const deleteTask = async (req,res)=>{
    try{
        let id=req.params.id
        await Task.deleteOne({_id:id})
        res.status(500).redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}


module.exports={
    getTasks,postTask,getTask,updateTask,deleteTask
}