// Return

let hi = () => {
    return `hi`;
    // (1)
};

let newName = hi();
    // (2)    (3)

    console.log(newName);

// 1 - The keyword that brings our data out of our function
// 2 - We need a new variable to hold the value of the return
// 3 - When called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for (let letter in name) {
        if(letter == 0) {
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

// console.log(capName); undefined

const myName = capitalizedName('wHItT');
console.log(myName + ' how are you doing?');

let tipCalc = (price) => {
    let tipPercent = 0.15;
    let tip = price * tipPercent;
    return tip;
}

let tipDinner = tipCalc(100);
console.log(tipDinner);