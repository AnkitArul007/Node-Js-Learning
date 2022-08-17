const http = require('http');

// http.createServer((req, res)=>{ // creating our own server::
//     res.end('Welcome to the backend response against your req') //ending the response with
// }).listen(8000, ()=>{ //creating a port where our server will run
//     console.log("Great!!, Hello You have started th server successfully at port 8000!");
// });


http.createServer((req, res)=>{ // creating our own server::
    //Now we will be playing with the URL
    console.log(req.url);

    //Now lets take this game a little more further-->
    if (req.url == '/'){
        res.end('Welcome to the HOME page'); //ending the response with
    }else if (req.url == '/contact'){
        res.end('Welcome to the Contact us page of our website') //ending the response with
    }else if (req.url == '/about'){
        res.end('Welcome to the about us page of our page') //ending the response with
    }else{
        res.writeHead(404, {  // Creating Error if the URL is incorrect: You can see the Network log in devTools
            "Content-type": "text/html" //defining the file type
        })
        res.end("<h1>Error 404: Page can not load</h1>")
    }

    //SO in this way we can manipulate our webpage::
    
}).listen(8000, ()=>{ //creating a port where our server will run
    console.log("Great!!, Hello You have started th server successfully at port 8000!");
});