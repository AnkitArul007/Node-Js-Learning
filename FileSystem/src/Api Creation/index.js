const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    //fetching the API from the file
    const jsonData = fs.readFileSync('./apiData.json', "utf-8");
    console.log(jsonData);
    const objData = JSON.parse(jsonData); //converting the JSON data into Js object data
    
    if (req.url == '/'){
        res.writeHead(200, {
            "Content-type" : "text/html"
        })
        res.end('Hello Welcome to our website')
    }else if (req.url == '/home'){
        res.writeHead(200, {
            "Content-type" : "text/html"
        })
        res.end('Hello Welcome to our Home Page')
    }else if (req.url == '/about'){
        res.writeHead(200, {
            "Content-type" : "text/html"
        })
        res.end('Hello Welcome to our About Us Page')
    }else if (req.url == '/apidata'){
        res.writeHead(200, {
            "Content-type" : "application/json"
        })
        res.end(objData[1].question) //Accessing the particular data from the API
    }
    else{
        res.writeHead(404, {
            "Content-type" : "text/html"
        })
        res.end('<h1>Error 404: Content not found</h1>')
    }

}).listen(5000, ()=>{
    console.log("Launched successfully");
})