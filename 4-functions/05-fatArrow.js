// Fat Arrow Functions

let hi = () => {
//    (1)  (2)
    console.log('Hello!')
}

hi();

// -> NOT THE SAME AS =>
// 1 - We need to set the fat arrow function to a variable
// 2 - We use the 'fat arrow' to signify it's a function

// Block Body

let hi = () => {
    console.log('hi')
}

let apples = (x) => {
    console.log(`There are ${x} apples in the basket.`)
}

apples(10);

// Concise Body

let hi = () => console.log('hi');

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);
// More than one parameter will require parenthesis
// Return (if one-line fat arrow function) is implied

// Line Breaks do not work for fat arrow functions
let func = () => console.log(`hi`); // this works

// let func = ()
// => console.log(`hi`); this will not work