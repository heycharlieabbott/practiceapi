const connectDB = require('./connect')
require('dotenv').config()

const express = require('express');
const app = express();
app.use(express.json());

const tasks = require('./routes/tasks')

app.use('/api/', tasks);

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

// app.get('/api/getsingletask/:id',getTask)
// app.post('/api/post',createTask)
// app.get('/api/getalltasks',getAllTasks)
// app.delete('/api/deletesingletask/:id',deleteTask)
// app.patch('/api/updatesingletask/:id',updateTask)
