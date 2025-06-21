const http = require("http")
http.createServer((req,res)=>
{
    console.log(req.url)   
    res.write("welcome user ")
    res.write("welcome admin")
    res.write("user /user for user and /admin for admin ")
    res.end()
    

}).listen(8080,()=>console.log("server running on localhost:801890"))