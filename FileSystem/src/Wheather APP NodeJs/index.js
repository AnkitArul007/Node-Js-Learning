const http = require("http");
const fs = require("fs");
const requests = require("requests");

// Getting our "home.html" file here in this "index.js"

const homeFile = fs.readFileSync('home.html', "utf-8");

//Creating the replaceVal Function::

function replaceVal (initialVal, newVal){
   let temperature = initialVal.replace("{%tempVal%}", newVal.main.temp);
   temperature = temperature.replace("{%minTemp%}", newVal.main.temp_min);
   temperature = temperature.replace("{%maxTemp%}", newVal.main.temp_max);
   temperature = temperature.replace("{%city%}", newVal.name);
   temperature = temperature.replace("{%country%}", newVal.sys.country);
   return temperature;
}


http.createServer((req, res)=>{
    if (req.url == "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Bhagalpur&appid=1b6fbaf8ced49d8edc2907cd1fe5c991')
            .on('data', (chunk)=> {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            const realData = arrData.map(val =>{
                replaceVal(homeFile, val);
            }).join("");
            console.log("hiii");
            console.log(realData);
            res.write(realData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
                console.log('end');
            });
    }
}).listen(5000, (err)=>{
    if (err) throw err;
    console.log("success");
})