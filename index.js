//chapter 3 assignment
console.log('=======CHAPTER 3 ASSIGNMENT===========')

console.log('==========1st=======')
//hoisting can be done in function declaration
let Population = '10M';
let traditional_food = 'chat';
let historic_places = 'Taj Majal';
console.log(describeYourState(Population, traditional_food, historic_places))
function describeYourState(Population, traditional_food, historic_places) {
    return `My state population is ${Population}, its traditional food is ${traditional_food} and historical place name is ${historic_places}`;
}


console.log('==========2nd=======')
//hoisting cannot be done in function expression

let describeYourState2 = function (Population, traditional_food, historic_places) {
    return `My state population is ${Population}, its traditional food is ${traditional_food} and historical place name is ${historic_places}`;
}
console.log(describeYourState2(Population, traditional_food, historic_places))

//hoisting means that a function is decalred then it can be called anywhere even before it is declared 

console.log('==========3rd=======')

function sum(a = 1, b = 2) {
    return a + b;
};
// let sum1 = sum();
console.log(sum())
console.log('==========4th=======')
let person = {
    name: 'john',

    age: 25,
};

function greet(person) {
    person.name = 'arpit'//update the property by change value of the key of object
    person.name = `Mr ${person.name}`;


    return `Welcome ${person.name}`;
}

console.log(greet(person));

console.log('==========5th=======')

// function seperate(str){
//     let words = str.split('');
//     if(words.length>0){
//         words[0] = words[0].toUpperCase();
//     }
//     return words.join('');
// }

// function transformer(fx,str){
//     return fx(str);
// }

// console.log(transformer(seperate, 'arpit'))

function firsetUpperCaseWord(str) {
    let word = str.split('');
    if (word[0]) {
        word[0] = word[0].toUpperCase();
    }
    return word.join('');
}

function transformer2(fx, str) {
    return fx(str);
}

console.log(transformer2(firsetUpperCaseWord, 'arpit'))

console.log()


console.log('==========6th=======')

setInterval(wish, 3000, 'Arpit');//hoisting//delay
function wish(name) {
    console.log(`hello ${name}`);
}

console.log('==========7th=======')

let arrowFunction = (name = 'Coders') => {
    `Welcome ${name}`;
};

console.log(arrowFunction('Programmers'));//undefined because not return

console.log('==========8th=======')

let a = 5;
let b = 6;
let c = 7;

function CalculateArea(s,a,b,c) {
    return Math.sqrt(s*(s - a)*(s - b)*(s - c));
}

function CalculateS(a,b,c) {
    return (a+b+c)/2;
}

function calculateTriangleArea(a,b,c,CalculateS){
    let s = CalculateS(a,b,c);
    return CalculateArea(s,a,b,c);
}

console.log(calculateTriangleArea(a,b,c,CalculateS));

console.log('==========9th=======');

//1st solution;
console.log('----------1st solution---------');
let sentence = 'This is a sample sentence';

function toUpper(word){
    let wordArray = word.split('');
    if(word[0]){
        word[0] = word[0].toUpperCase();
    }
    return wordArray.join('');//word array of word
}

let wordArray = sentence.split(' ');//word array of sentence
for(let i =0; i<wordArray.length;i++){
    wordArray[i] = toUpper(wordArray[i]);
}

let modifiedSentence = wordArray.join(' ');
console.log(modifiedSentence);


console.log('---------2nd solution-----------');




function capitaliseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitaliseSentence(sentence) {
    let wordArray = sentence.split(' ');
    let updatedArray = [];
    
    for (let i = 0; i < wordArray.length; i++) {
        let word = wordArray[i];
        let updatedWord = capitaliseFirstLetter(word);
        updatedArray.push(updatedWord);
    }

    return updatedArray.join(' ');
}

let sentence2 = 'This is a sample sentence2';
let updatedSentence = capitaliseSentence(sentence2);
console.log(updatedSentence);
