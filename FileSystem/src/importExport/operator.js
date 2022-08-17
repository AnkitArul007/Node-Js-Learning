function add(a, b){
    return a+b;
};

function sub(a,b){
    return a-b;
}

function div(a, b){
    return a/b;
}

function mul(a,b){
    return a*b;
}

let chocos = {                              
    greet : function () {
        console.log("Hi Everyone! Thanks that you guys called me up!")
    }

}

module.exports = {add, sub, mul, chocos, div}; //exporting our own module so that we can use it on the other required module