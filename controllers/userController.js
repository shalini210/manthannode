let users = require("../models/userModel")
exports.addUser = (u)=>
{
oldlength = users.length
    
    let newlength = users.push(u);
    if(newlength>oldlength)
    {
        return "User added"
    }
    else
    {
        return "user Not added"
    }
}
exports.deleteUser=(uid)=>
{
    return " we will delte user here "
}
exports.updateUser=(u)=>
{
    return " update user fun from controller"
}
exports.getUsers = ()=>
{
    return  users;
}