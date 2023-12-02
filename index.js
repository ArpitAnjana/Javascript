let hobbies = '     coding badminton anime games';

//trim method
let result = hobbies.trim();

console.log(hobbies);
console.log(result);

console.log(result.lastIndexOf("anime"))

let fullname = "arpit"
console.log(fullname.slice(1,3))


let colours = 'red green yellow blue';
let arrColour = colours.split(' ');
console.log(arrColour);

//type conversion
let stringType = '10';
let numberType = Number(stringType);
console.log(typeof numberType);
let res = numberType + 10;
console.log(res);


let fruits = ['🍏','🍐','🍓'];
let newFruits = ['🍇','🍒'];
console.log(fruits.concat(newFruits));//value not updates its new varibale only
//push method
let updateDishes = fruits.concat(newFruits);
console.log(updateDishes.push('🍌'))//return new size of array
console.log(updateDishes)//return new array

let dishes = ['biryani', 'chat', 'paratha'];
console.log(dishes.pop())


//Assignment
//Chapter 1(data types):
//1st
let check1 = null;
let check2;
console.log(typeof check1, check1);
console.log(typeof check2, check2);


//3rd 
let languages = 'java javaScript python cSharp';

let result2 = languages.lastIndexOf('S');

console.log(result2);

//4th
let variable = 'hello programmers';

let result3 = Number(variable);

console.log(result3);
//NaN because its not a real int inside a variable that it can be change to number it has to be a number 

//5th
let num1 = 32;

let num2 = '32';

let result4 = num1 !== num2;//strict equality operator: checks for value and data type both

let result5 = num1 != num2;//loose equality operator: checks for value only not data type

console.log(result4, result5);


//6th
let str = 'Hello Programmers';

let result6 = str.includes('r');//this chcks ki if there is this string in the result.

console.log(result6);

//7th

let num11 = 2;

let num12 = 5;

let result7 = num11 ** num12 * 2;

console.log(result7);


//8th
let num13 = [1, 2, 4, 5];

let num14 = [6, 5, 8, 0];

let result8 = num13.concat(num14);

console.log(JSON.stringify(result8));

//9th
let a = 5;

let b = 7;

let c = 8;

let result9 = a < b > c;

console.log(result9);