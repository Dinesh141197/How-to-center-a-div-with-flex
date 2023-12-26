// function statement or function declaration
/*
a();

function a (){
    console.log("a called");
}

// function expression 

var b = function (){
    console.log("b called");
}
b();
*/
// what is the difference b/w function statement and function expression
 // ans :- Hoisting 

// Anonymous function

/*
function (){

}
*/
//Uncaught SyntaxError: function statement requires a name
// why? because we can use anonymous function only as a value

// Named function expression

/*
var c = function names(){
    console.log('hey');
}
c();
*/
// Named function is same as function expression the only difference is that you give a name to a function and that function can be called alone
// like names(); otherwise will give an error Uncaught ReferenceError: names is not defined


// difference between parameters and arguements


// first class function or Citizens

// the ability to use function as value and can be passed as an argument into another function and return a function this ablitiy altogether called first called function

/*
var fun = function (param1){
   return function xyz(){

   }
}

console.log(fun());
*/


// Arrow function

