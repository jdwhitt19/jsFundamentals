let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket.')
} else {
    console.log('No jacket needed.')
};

let name = 'Josh';

if (name == 'Josh') {
    console.log('Hello my name is Josh.')
} else {
    console.log('Hello is your name Adam?')
};

let name2 = 'aUTuMN';

// charAt(0)
// name2[0]

if (name2.charAt(0) === name2.charAt(0).toUpperCase()) {
    console.log(name2)
} else {
    console.log('Hey it is not written correctly.')
};

let name3 = 'jOSh';

if (name3.charAt(0) === name3.charAt(0).toUpperCase()) {
    console.log(name3.charAt(0))
} else {
    console.log(name3.slice(1, 4).toLowerCase())
};

let name4 = 'joSh';

if (name4.charAt(0) === name4.charAt(0).toUpperCase()) {
    console.log(name4.charAt(0) + name4.slice(1).toLowerCase());
} else {
    console.log(name4.charAt(0).toUpperCase() + name4.slice(1).toLowerCase())
};