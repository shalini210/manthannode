const fs = require("fs")
fs.mkdir("abc",(err)=> // fs.rmdir("abc",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("folder Created")
    }
})
// fs.unlink("demo.txt",(err)=>
// {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log("file deleted ")
//     }
// })
// fs.readFile("demo.txt",(e,data)=>
// {
//     if(e)
//     {
//         console.log("err" +e)
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// })
// fs.appendFile("demo.txt","hello world how are your todsfskldfhj ",(err)=>
// {
//     if(err)
//     {
//         console.log("err"+err)
//     }
//     else
//     {
//         console.log("file written successfully")
//     }
// })