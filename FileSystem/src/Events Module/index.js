// Events Module
//Node js has inbuilt module callled "Events" where you can create-, fire-, and listen for- your own Events::

const EventEmitter = require('events'); //Note here we are not just importing it but we are making "EventEmitter" a class that's why the 1st letter of the EventEmitter is in CAPS::

const event = new EventEmitter(); //Creating a class instance

//Task 1:: Registering for the event to be fired only one time using once::

event.once('sayMyName', ()=>{  // Here we are defining the event just as we we define the function to be performed before event in JS
    console.log("Your name is Ankit")
});

event.emit('sayMyName');  //We are just calling the event we have defined 


//Task 2:: Create an Event Emitter instance and register couple of callbacks::

event.on('yourCity', ()=>{
    console.log("currently you are in Dehradun");
})

event.on('yourCity', ()=>{
    console.log("currently you are in Delhi");
})

event.on('yourCity', ()=>{
    console.log("currently you are in Bhagalpur");
})

event.emit('yourCity');

//Task 3:: Registering for the event with callBack parameters::

event.on("checkPage", (statusCode, msg)=>{
    console.log(`your staus code is ${statusCode} and the page is ${msg}`);  //using template literals in the console.log part
})

event.emit("checkPage", 200, "ok"); //calling our defined event with parameters as well and using them: