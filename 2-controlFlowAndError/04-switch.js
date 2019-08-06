// Switch

let friend = 'Bob';
switch (friend) {
  case 'Autumn':
    console.log("Hey Autumn, when are we going rock wall climbing?");
    break;
  case 'Dave':
    console.log("Hey Dave, how is Cooper?");
    break;
  case 'Alecx':
    console.log("Hey Alecx, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
    console.log('I\'m sorry,', friend,', but do I know you?');
};

let dessert = 'Pie';
switch (dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice Cream':
        console.log('We all scream for ice cream!');
        break;
    default:
        console.log(`${dessert} is not on the menu.` )
};

let age = 27;
switch (true) {
    case (age >= 25):
            console.log('Yay! You can rent a car!');
            break;
        case (age >= 21):
            console.log('Yay! You can drink!')
            break;
        case (age >= 18):
            console.log('Yay! You can vote!');
            break;
        case (age <= 17):
            default:
            console.log('Sorry you are too young to do anything')
    }; 