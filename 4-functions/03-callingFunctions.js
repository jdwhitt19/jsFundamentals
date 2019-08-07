// Calling Functions

function hi() {
    console.log('HI!');
};

hi();
// This is how we call or 'invoke' our function

function count() {
    for (let i = 1; i <= 10; i ++)
    console.log(i);
};

count();

let arr = ['This', 'is', 'really', 'cool'];

function list () {
    for (word of arr) {
        console.log(word)
    }
};

list();