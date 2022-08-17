const fs = require('fs');

fs.writeFileSync('text.txt', "Hello Friend we are excited to learn node.js");
fs.writeFileSync('text.txt', "We expect the same from you as well!!"); //overwrites the data if the file exists and data is present there
fs.appendFileSync('text.txt', "Opps with the above method we lost our 1st sentence!") 
// fs.unlink('text.txt', (err)=>{
//     if (err) throw err;
//     console.log("success");
// });

// const data = fs.readFileSync('text.txt');
// const org_data = data.toString();
// console.log(org_data)


// How to read the data without getting the buffer data in the 1st attempt::

// fs.readFile('text.txt', 'utf8', (err, data)=>{ //here "utf8", is the encoding to decode the code so that we do not get in the form of buffer
//     if (err) throw err;
//     console.log(data);
//     });


//     fs.rename('text.txt', 'myText.txt', (err)=>{
//         if (err) throw err;
//         console.log('success');
//     });