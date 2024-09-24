//This is my first Javascript//
//console.log("Hello World"); let name = "Mosh"; console.log(name);

//Cabbot be a reserved keyword//
//Should be meaningful//
//Cannot start with a number (1name)//
//Cannot contaon space or hypen (-)//
//Are case-sensitive//

//let firstName2 = "Mosh"; let lastName = "Hamedani";

//let interestRate=0.3; interestRate=1; console.log(interestRate);//

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Default is used const. and let, if you must give new value. Variable-le võin ise anda nime is järele. Ainult stringidel (string on karakterite kogum - nimisõna, tegusõna on boolean) on ülakomad.//

let name = 'Mosh'; //String Literal//
let age = 30; //Number Literal//
let isApproved = false; //Boolean Literal//
let firstName = undefined; //Undefined//
let selectedColor = null; //Null//
console.log(age)

let person = {
    name: 'Katriin',
    age:30
};

//Dot Notation//
person.name = 'John';


//Bracket Notation//
person['name'] = 'Mary';

console.log(person);

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

//Calculating a value//
function square(number) {
    return number * number;
}

console.log(square(2));

function greet(name5, lastName5) {
    console.log('Hello World' + name5 + '' + lastName5);
}

greet('John', 'Smith');

//argument=value, parameter is for example greet(name)//

//Conditional statements - can be true/false/age > 18

// let age3 = 20;

// if(age3 > 18){
//     console.log("You are an adult.");
// }

let country = "India";

let age3 = 20;

if(age >= 18 && country == "India"){

    console.log("You can get a driver's license.");
}

//Conditioanl statements

//If else

let age4 = 15;

if(age4 > 18){
    console.log("You are an adult.");
}
else if(age4 >= 16){
    console.log("You are a teenager.");
}

else{
    console.log("You are a minor.");
}

//Conditional statements

//Switch

//Boolean ; string value= '42' ; number value=42 -> Go live annab vastava tulemuse
let value = (42=="number");

switch (typeof value) {
    case "number":
        console.log("number")
        break;

        case "string":
            console.log("string")
            break;

            case "boolean":
                console.log("boolean")
                break;

    default:
        console.log("Other");
        break;
}

let dayName = 2;

switch (dayName) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Fiday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Invalid day number";
        break;
}
console.log("The day is: " + dayName);

// Ternary Operator


// condition ? value_if_true : value_if_false

let age6 = 20;

let msg = (age >= 18) ? "You are an adult" : "You are a minor.";

console.log(msg);

//for loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let coding = ["ema", "isa", "vend"]

for(let i = 1; i < coding.length; i++){
    console.log(coding[i])

    for(let j = 1; j<= 3; j++){
        console.log("Inner loop " + j);
    }
}

// while loop

//while(condition){
    // code to be repeated

let i = 0;

while(i<=10){
    console.log(i);
    i++;
}

// do...while loop

// do{
//     // code to be repeated
// }while(condition);

let x = 10;

do{
    console.log(x)
    i++;
}while(x<=5);

// break / continue - ei näita break numbrit ehk millal ta tegevuse lõpetab, läheb edasi alates järgmisest, suurendamine kasvavalt edasi. Liikumine ülaslt-alla, kui console if ees siis pole midagi skippida ja numbrid jooksevad järjest

for(let i = 1; i <= 5; i++){
   
    if(i == 2){
        continue;
    }
    console.log(i);
}

//Array map

// const numbers = [1, -1, 2, 3]

// const filtered = numbers.filter(n=> n >= 0);

// console.log(filtered);

// const array1 = [1, 4, 9, 16];

// //Example 1 Tulemus Array 123 ja Array 2, 8, 18, 32 ja 18-30 numbrid

//   const array2 = [1, 4, 9, 16];

//   //Pass a function to map
//   const map1 = array2.map((x) => x * 2);

//   console.log(map1);
//   //Expected output: Array [2, 8, 18, 32]

//   for(let i = 18; i <= 30; i++){
   
//     if(i == 2){
//         continue;
//     }
//     console.log(i);
// }

//Example 2

const array3 = ["punane", "sinine", "kollane", "roheline", "kollane"];

//Pass a function to map
const map2 = array3.map((x, index) => {if(index !== 2){
return x
}});

console.log(map2);

//Funktsioonid

// function functionName
// statement1;
// return something;

//Tingimused
// if (condition) {
//     // block of code
//     // execute this if condition is true
// }
// else {
    // block of code
    // 
// }

// Ülesanne 2.1 Tingimused ja funktsioonid

function greetUser(nimi8) {
    return "Tere, " + nimi8 + "!";
}
const nimi8 = "Malle";
console.log(greetUser(nimi8));

// Ülesanne 2.2 Kirjuta kood, mis võtab kasutaja vanuse ja tagastab vastava vanuseklassi grupi. Kasuta && !!

// function ageGroup(age) {

//     if (age>18) {
//         return "Alaealine";
//      }
    
//     else if (age<=18 && age<=65) {
//         return "Täisealine";
//     }
     
//     else {
//      return "Pensionär";
//     }
// }

// const age2 = 18
// console.log(ageGroup(age2))


// Ülesanne 3. Kirjuta funktsioon nimega kontrolliPaarisVõiPaaritu, mis võtab sisendiks ühe arvu ja kasutab tingimuslauset, et kontrollida, kas see arv on paaris vüi paaritu. Number võib olla ka arv.

// function kontrolliPaarisVõiPaaritu(number) {

//     if (number %2 ===0) {
//         return "Arv on paaris";
//     }

//     else {
//         return "Arv on paaritu";
//     }
// }

// console.log(kontrolliPaarisVõiPaaritu(8))

// Massiivid (nimekiri) ja tsüklid. int array [10] = [16, 23, 42, 15, 14]. Command + shift + 7 muudab aktiveeritud teksti kommentaariks koodis

// const array_name = [item1, item2, ...];
// const cars = [Volvo, Renault, Cupra];

// Ülesanne 3.1 Koosta array, mille nimi on snäkid
// Ülesanne 3.2 Lisa nimekirja lõppu juurde väärtus kananagitsad

// let selectedSnacks = ['kr6psud', 'kypsised', 'šokolaad', 'kummikommid', 'juustupulgad'];

// // (5 - kananagitsad)

// selectedSnacks[5] = 'kananagitad';
// console.log(selectedSnacks)

// Õlesanne 3.3 Asenda 1 pähklitega ja 3.4 Kasuta .length, et printida elementide arv massiivis ja 3.5 Kasuta .sort, et sorteerida elemnedid tähestiku järjekorda

// let selectedSnacks = ['kr6psud', 'kypsised', 'šokolaad', 'kummikommid', 'juustupulgad'];
// selectedSnacks [0] = 'p2hklid';
// let length = selectedSnacks.length;

// selectedSnacks[5] = 'kananagitad';
// console.log(selectedSnacks)

//TSÜKLID. Ülesanne 1. Kasuta for-tsüklit, et väljastada kõik arvud vahemikus 1-9

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// Ülesanne 2. Kasuta for tsüklit, et leida kõikide paarisrvude summa vahemikus 1-10 || even summary ||vastus peab tulema 30

let summa = 0;

for (let i = 1; i < 10; i++){

    if (i % 2 === 0) {
        summa += i;
    }
}

console.log("Paarisarvude summa vahemikus 1-10 on: " + summa);