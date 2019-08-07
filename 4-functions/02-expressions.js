// Declaration

function hi() {
    console.log('Hi!');
};


// vs.


// Expression

let hey = function hi() {
    console.log('Hi!');
};

// The variable hey is now representative of the function 'hi()'.

/*
Difference between declaration and expression:
Declaration gets hoisted
Expression does not
*/

// Anonymous function

let hi = function () {
    console.log('Hey!');
};