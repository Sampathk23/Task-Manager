let mongoose =require("mongoose")

//schema,stores data in db, let's us have validation for the data

let TaskSchema = new mongoose.Schema({
    task:{              /* task is defining what kind of data it is storing*/
        type:String,
        required:true,
        trim:true      /* this trim will remove all the extra spaces automatically*/
    },
},{timestamps:true})   /* timestamps will be in ios standard*/

module.exports = mongoose.model("task",TaskSchema)