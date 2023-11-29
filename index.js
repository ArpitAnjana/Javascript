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