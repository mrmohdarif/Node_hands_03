const express=require('express')
const route=require('./routes/routes')
const dotenv=require('dotenv')
PORT=dotenv.config()
const app=express()
app.use(route)
PORT=process.env.PORT
app.listen(PORT || 5000,()=>{
    console.log("server is created");
})