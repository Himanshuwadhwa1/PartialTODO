import express from "express";
import {createTodo, updateTodo} from "./types.js" // zode to input validation
import {todo} from "./db.js";
import cors from "cors";

const app =express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/todo',async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "Invalid inputs"
        });
        return;
    }
    //Put it in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,
    })
    res.json({
        msg : "Todo Created"
    });

})

app.get('/todos',async(req,res)=>{
    const todos = await todo.find({})
    res.json(todos);
})

app.put('/completed',async(req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "Invalid inputs"
        });
        return;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Todo Updated"
    })

})

app.listen(port,()=>{
    console.log(`Server is runing in ${port} port`)
})