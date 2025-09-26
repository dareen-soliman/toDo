const mongoose= require("mongoose");

const toDoSchema= new mongoose.schema({
    title: {type: String, required:true},
    done: {type:Boolean, default:false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
    
})

const ToDo= mongoose.model("ToDo", toDoSchema);

module.exports= ToDo;