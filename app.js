const connectDB = require('./connect')
require('dotenv').config()

const express = require('express');
const app = express();
let {people} = require('./data');

const {createTask, getAllTasks, getTask, updateTask, deleteTask} = require('./controllers/tasks')

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data: people})
})




const start = async () =>{
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(5001, () =>{
        console.log('app is listening on 5001')
    })
} catch (error) {
    console.log(error)    
}
}

start()
app.get('/api',getTask)
