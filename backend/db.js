import mongoose from "mongoose";

mongoose.connect("mongodb+srv://YourUsername:YourPassword@cluster0.ewv9khe.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo =  mongoose.model('todos',todoSchema);

export {
    todo
};