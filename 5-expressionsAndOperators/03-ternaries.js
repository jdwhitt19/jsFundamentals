// Ternary

let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
};

(number > 0) ? console.log(true) : console.log(false);

if (number = 0) {
    console.log('Number is 0.');
} else if (number >= 5) {
    console.log('Number is bigger than 5.');
} else if (number <= 0) {
    console.log('Number is smaller than 0.');
} else {
    console.log('Nope.');
};

(number == 0) ? console.log('Number is 0') : (number >= 5) ? console.log('Number is bigger than 5') : (number < 0) ? console.log('Number is smaller than 0') : console.log('Nope');

let age = 15;

(age >= 25) ? console.log('Yay! You can rent a car!') : (age >= 21) ? console.log('Yay! You can drink!') : (age >= 18) ? console.log('Yay! You can vote!') : console.log('Sorry, you can not do anything fun.');