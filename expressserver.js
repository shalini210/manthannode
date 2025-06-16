const express = require("express")
const app = express()

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+ "/home.html")
    // res.send("THis is home ")
})
app.get("/add/:a/:b",(req,res)=>
{
    console.log(req.params);
    res.send("this is for add")
})
app.get("/about",(req,res)=>
{
    res.send("THis is about")
})
app.get("/contact",(req,res)=>
{
    res.send("THis is contact")
})
app.listen(8080,()=>console.log("express server running"))