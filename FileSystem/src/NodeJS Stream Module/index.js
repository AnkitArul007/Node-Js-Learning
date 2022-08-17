
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Nodejs, there are four types of streams--

//Strems means listeening to music or watching video in "real  time", instead of  downloading a file to your computer and watching it later.
//Types::
    //Readable
    //Watchable 
    //Duplex
    //Transform

// Task :: Our task is to stream the data present on the input.txt on the server:
    
    //At first we will do it in the Old way::

const fs = require('fs');
const http = require('http');

const ourServer = http.createServer();

// ourServer.on("request", (req, res)=>{
//     fs.readFile("input.txt", "utf-8", (err, data)=>{
//         if (err) throw err;
//         res.end(data)
//     })
// }).listen(3000, (err)=>{
//     if (err) throw err;
//     console.log('serverStarted');
// })


// Now we will do the task with the stream method::

// ourServer.on("request", (req, res)=>{
//     const rStream =  fs.createReadStream('input.txt'); //this is a function to start read stream
//     rStream.on('data', (chunkData)=>{  //here we are firing the "data" event to start reading and fetching the data from the source
//         res.write(chunkData);
//     })
//     rStream.on('end', (chunkData)=>{ //here we are firing the "end" event of stream which means no more data is left
//         res.end();
//     })
// }).listen(3000, (err)=>{
//     if (err) throw err;
//     console.log('serverStarted');
// })

//Likewise we can use this STREAM module to stream music and videos inline.

//Your task to study and make notes on this important module of NODEJS and it comes under the fs::


//Also there is a third way to perform the above task
//In this method we will perform the "read" and "write" method simultanously::

ourServer.on("request" ,(req, res)=>{
    const readStream = fs.createReadStream('input.txt');
    readStream.pipe(res);  // pipe method is used to perform the read and write task all-together
}).listen(3000, (err)=>{
    if (err) throw err;
    console.log('Successful');
});