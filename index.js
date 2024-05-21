const express = require('express');
const mongoose = require('mongoose');

const jobRoutes = require('./routes/job')

const app = express();

//JSON parsing middleware
app.use(express.json())

//MongoDB connection
mongoose
.connect("mongodb://localhost:27017/jobapp")
.then(()=> console.log('Connection with database established successfully'))
.catch((err)=> console.log('Error connecting to database', err));

//API routes
app.use(jobRoutes);


app.listen(8080, ()=>{
    console.log('listening on port 8080');
})