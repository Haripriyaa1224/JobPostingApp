const express = require('express');
const mongoose = require('mongoose');

const jobRoutes = require('./routes/job')

const app = express();

//JSON parsing middleware
app.use(express.json())

//MongoDB connection
mongoose
.connect("mongodb+srv://mailtohari1224:eFrD6iFnCDD8EicO@jobapp.q6qsxj5.mongodb.net/")
.then(()=> console.log('Connection with database established successfully'))
.catch((err)=> console.log('Error connecting to database', err));

//API routes
app.use(jobRoutes);


app.listen(8080, ()=>{
    console.log('listening on port 8080');
})