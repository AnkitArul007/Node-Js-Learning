// const chalk = require('chalk');   // our chalk module is not working currently we will look at the issue?? #task pending
const validator = require('validator');


// console.log(chalk.blue('hello world'));



//Also there is a module named validator used to validate the form::
//It is a pre-defined module in npm which we can directly use and validate our forms::

console.log(validator.isEmail('abc@gmail.com'));

