// JSON stands for Javascript Object Notation. It is a lightweight format for storing and transferring data.
// JSON is often used to send data from a server to a webpage.

const fs = require('fs');


const bioData = {
    firstName : "Ankit",
    lastName : "Arul", 
    age : 26,
    firstCry : '13 Jan'
};

const newData = JSON.stringify(bioData);

fs.writeFile('myData.txt', newData, (err)=>{
    if (err) throw err;
    console.log("data added successfully");
});

fs.readFile('myData.txt', "utf-8", (err, data)=>{
    if (err) throw err;
    console.log(data);
    const ourFetchedData = JSON.parse(data);
    console.log(ourFetchedData);
});



// Our Challenge::
        //Convert the data into JSON format
        //Save it into another file
        //Read the file
        //agian convert the data in JS object
        //Console the data

