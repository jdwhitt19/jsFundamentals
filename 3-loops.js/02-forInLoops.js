// let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};

// for (let item in student) {
    // console.log(student[item]);
// };

// let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

// for (let cat in catArray) {
    // console.log(catArray[cat]);
// };

let name = 'jOsh';
let capName;

for (let x in name) {
    if (x == 0) {
        capName = name[x].toUpperCase();
    } else {
        capName += name[x].toLowerCase();
    }
};

console.log(capName);