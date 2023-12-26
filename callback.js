// what is callback function in javascript?

//A callback is a function passed as an argument to another function.

/*

setTimeout(function(){
    console.log("timer");
},5000);

function a (b){
    console.log('I am A')
    return b();
}

a(function b(){
    console.log("I am B");
    
});
*/

// javascript is as synchronous and single threaded language

// blocking a main thread 

  // javascript has a only call stack it means the line get executed one by one and if any operation block the the call stack that called main thread blocking
  //  we should never block a call stack it means we have to use async operation to perform time taking task

// Deep about event listners
// CLOSURE DEMO WITH EVENT LISTNER



function attachEventListners(){
    var count  = 0;
    document.getElementById("clickme")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked", count++);
    });
}

attachEventListners();



// Garbage Collection and removeEventListeners

 





