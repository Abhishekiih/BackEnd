require('dotenv').config()
const express = require('express')
const app = express()
const Port=5000

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/login",(req,res)=>{
    // res.send("<h1>login successfully</h1>") // we can't send req two times.
    res.send("<h2>again login successfully</h2>")
})

app.get("/instagram",(req,res)=>{
    res.send("myinstaid:-abhishek.o1")
})

app.get("/facebook",(req,res)=>{
    res.send("myfacebookid:-Abhishek baghel")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${Port}....`)
})