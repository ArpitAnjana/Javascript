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

//==================CHAPTER 2====================

//================CONTROL FLOW===================

let fruits2 = ['🍏','🍎','🍐','🍊'];

for(let i =fruits2.length; i>=0; i--){
    console.log(fruits2[i])
}

console.log("=======================")
let j =0;
while(j<fruits2.length){
    console.log(fruits2[j]);
    j++;
}

console.log("=======================")
let k =fruits2.length -1;
while(k>=0){
    console.log(fruits2[k])
    k--;
}
console.log("=======================")
for(let i =0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}
console.log("=======================")
let score = 90;
if(true){
    score = 10; //reassign 
    console.log(score)
}
console.log(score)

console.log("=======================")
let score2=100;
if(true){
    let score2 =20;//new declare
    console.log(score2)

}
console.log(score2)

console.log("==========================")
//ternary operator
const age = 2;
const weight = 6;
let result10 = age>18 ? weight>60? "qualify":"weightIssue":"notqualified";//ternary operator
console.log(result10)


console.log("==========================")
//switch statement:
let result11;
let age1 = 15;
switch(age1){
    case 13:
        result11 = "your are tiny"
        break;
    case 14:
    case 15:
        result11 = "you are allowed to watch the movie";
        break;
    default:
        result11 = "not allowed"

}
console.log(result11);

let text = '';
for(let i =0; i<10; i++){
    if(i===3){
        continue;
    }
    text = text+i;//string concatenation: when a string is made and it is added to a number then it is converted into string the number actually and then added 
    //and we can see that text was string but the value was null then we performed the addition on it, it automatically understood it was number and added them
}
console.log(text);
console.log('==========================')
let marks;
let passing = marks>40? 40:50;

console.log(passing)


console.log('===============================')


//=======================chapter 3=====================
//=======================Functions=====================

//declaration
let name2 = 'Arpit'
function nameOf(){//normal function
    console.log(`hey there! ${name2}`)
}

nameOf();//calling function


let callME = function(name3){//arguement 
    //variable is a function here
    //anonymous function
    
    console.log(`hy myself ${name3}`)
}

callME("soxy");

//Arrow function:
let invitation = (name3) => `hey ${name3} how are you doing`;
console.log(invitation('Arpit'));

//Higher order function 
let upperCase = (str) => {
    return str.toUpperCase();
}

let lowerCase = (str) => {
    return str.toLowerCase();
}

let result12 = (str, fun) => {//this function takes another function as an arguement 
    return fun(str);
}

console.log(result12('Arpit', upperCase))


//setTimeOut and setInterval
function greeting(name4 = 'soxy', language='java'){
    console.log(`welcome ${name4} to anonymous function in ${language}`)
}
//setTimeout(function|code, delay, arg1, arg2)
setTimeout(greeting,3000, 'Arpit', 'javascript')
//this was function as an arg
//takes 3000ms or 3sec to run the function greetings and having 

setInterval(greeting, 3000)
//setInterval(function,timeinterval|repetation/time, arg)
//this is continuous function it will continue to work and never ends 


//Hoisting: 
//when a function or variable is defined but used before it is called hoisting


test=10;//assigned here
console.log(test)//called here
var test;//declaration here

//hoisting function 2:
test1()
function test1(){
    console.log('test1')
}
//hositing can be done in this format only not in another type of function like arrow function or initialising an variable to a funtion

//callback function:
let calculation = (fx , a, b) => {//calculation>fx //1st
    return fx(a,b);//4th step
}

let sum = (x,y) => {//3rd step 
    return x+y;
}

console.log(calculation(sum, 4, 5));//2nd step //sum is function passsed as an arg

console.log('===============================')
console.log('===============ASSIGNMENT-2================')


console.log("=========1st==========")
let i = 4;

for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}

console.log("=========2nd==========")
let l = 0;

for (l; l < 5; l++) {
  console.log(l);
}

console.log("=========3rd==========")
let numb = 10;
while(numb!=0){
    console.log(numb);
    numb--;
}

console.log("=========4th==========")
let country = 'India';
let language = 'English';
let hasPopulation = 90;
let hasSpanishFood = 'false';
let hasEnglishFood = 'true';
if(language == "English" && hasPopulation<10 && (hasEnglishFood||hasSpanishFood)){
    console.log(`welcome sir ${country} is right country for your.`)
}
else{
    console.log(`sorry sir ${country} is not suited for you.`)
}

console.log("=========5th==========")
let m;
for (m = 0; m < 10; m++) {
    console.log(m);
  }
  
console.log(m);

console.log("=========6th==========")
let agee = 20;
let height = 5.11;
if(agee===20){
    if(height>5.10){
        console.log("i can sit in exam")
    }
    
}

console.log("=========7th==========")

let grade = 'A';
let passingYear = 2019;
let result13 = grade=='A' ? passingYear<2020 ? "pass":"rightyear":"fail"
console.log(result13);

