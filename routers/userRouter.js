const express = require("express")
const router = express.Router()
const path = require("path")
const userController = require("../controllers/userController")
router.get("/",(req,res)=>
{
    // console.log(req.query)
    let users = userController.getUsers()
    res.send(users)
})
router.get("/:id",(req,res)=>  
{
        let users = userController.getUsers()
    let user = users.find((s)=>s.id ===parseInt(req.params.id))
    res.send(user)
})

router.post("/",(req,res)=>
{   
    let msg =  userController.addUser(req.body)
    res.send(msg)
    // // let s = {id:users.length+1,name:req.body.name,age:parseInt(req.body.age)}
    // users.push(s)
    // res.send("user added")
})
router.put("/",(req,res)=>
{
    let msg = userController.updateUser()
    res.send(msg)
})
router.delete("/",(req,res)=>
{
    let msg = userController.deleteUser()
    res.send(msg)
})
module.exports = router