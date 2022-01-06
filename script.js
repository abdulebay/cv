//

// const bairthYear = 2021;
// let centure;
// if (bairthYear <= 2000) {
//     centure = 20;

// } else {
//     centure = 21;

// }
// console.log(centure)

// const markBmi = 28.3;
// const johnBmi = 23.9;
// if (markBmi >= johnBmi) {
//     console.log(`Mark has Higher Bmi`)

// } else {
//     console.log(`johnbmi is higher`);

// };


// const inputYaer = 'saal';
// console.log(inputYaer + 18);
// console.log(`i am 20 year old`);
// console.log('10' - '8' - 3);

// let n = '2' + 1;
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean('sana'));

// const money = 0;
// if (money) {
//     console.log("don't spend it all");

// } else {
//     console.log('you should get some job');

// };

// const favroites = Number(prompt('what is your favorites number'));
// console.log(favroites)
// console.log(typeof favroites);

// if (favroites === 23) {
//     console.log('23 Number is Cool!');

// } else if (favroites === 7) {
//     console.log('7 number is also cool!');
// } else if (favroites <= 23) {
//     console.log('okay');
// }

// let a = 10, y = 10;

// if (a === 10 | y === 15) {
//     console.log('Ture');

// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreQualas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreQualas);

// if (scoreDolphins > scoreQualas) {
//     console.log('Dolphins Wins The Trophy');

// } else if (scoreQualas > scoreDolphins) {
//     console.log('Qualas Has Win The Trophy');
// } else if (scoreDolphins === scoreQualas) {
//     console.log('Match Tired');
// } else (scoreDolphins >= 100); { console.log('Yes') }


// const day = 'Monday'
// switch (day) {
//     case 'Monday':
//         console.log('Start Work')
//         break;

//     case 'Tuesday', 'Wensday':
//         console.log('Coding Chalenges')
//         break;

//     case 'Friday':
//         console.log('Learn New Things')
//         break;

//     case 'Saturady', 'Sunday':
//         console.log('Take Rest')
//         break;
//     default:
//         console.log('Not A valid day')
// }

// if (day === 'Monday') {
//     console.log('Start Work')
// } else if (day === 'Tuesday' || 'wensday') {
//     console.log('Coding Chalenges')
// } else if (day === 'friday') {
//     console.log('Learn New Things')
// } else if (day === 'saturday' || 'Sunday') {
//     console.log('Not A valid day')
// } else {
//     console.log('Not a valid day💧')
// }

const age = 23;
// age >= 18 ? console.log('drink water 💧') :
//     console.log('drink wine🍷');



const drink = age >= 18 ? 'drink water 💧' : 'drink wine🍷';
console.log(drink);

let drink2;
if (age >= 18) {
    console.log('drink water 💧');

} else {
    console.log('drink wine🍷');
}


console.log(`i would like to drink ${age >= 18 ? 'drink water 💧' : 'drink wine🍷'}`);

// bill value less then 300 then tip is 15%  , else 20%

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * .20;
console.log(`bill is now ${bill + tip} and tip ${tip} and value of bill ${bill} `);

if (bill <= 300 && bill >= 50) {
    console.log(` bill ${bill} and tip is ${bill * 0.15} tottal ${bill + tip}`);

} else {
    console.log(`more then 300 values bill ${bill * .20}`);
}