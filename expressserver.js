const express = require("express")
const app = express()
const userRouter = require("./routers/userRouter")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("use /user for user and /admin for admin")
})
app.use("/user",userRouter)

app.listen(8080,()=>console.log("express server running"))