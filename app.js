const express = require('express');
const app= express();
const taskRoutes=require('./routes/tasks')
const connectDb=require('./db/connect');
const notFound = require('./middleware/not-found');
require('dotenv').config();
// middleware
app.use(express.static('./public'))
app.use(express.json());
const port = process.env.PORT || 3000;

// app.get('/hello', (req, res)=>{
//     res.send('Task manager app')
// })

app.use('/api/v1/tasks', taskRoutes)
app.use(notFound)



const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch(error){
        console.log(error)
    }
}

start();



