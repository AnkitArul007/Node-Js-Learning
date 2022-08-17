//Why do we have to import, require or use module keyword to import modules in NodeJs? Why the modules are private??
//This is because whenever we write any code in nodeJs the node js compiler makes it private by putting it in some function::

//Exp- We wrote---->

        // const a = 'hello';
        // console.log(a);

//What node Js will do to the code::

        // (function (import, module, require, __dirname, __filename){
        //     const a = 'hello';
        //     console.log(a);
        // })();

        //This function which wraps and protects our data is know as MODULE WRAPPER FUNCTION