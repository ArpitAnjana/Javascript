"use strict"
//============object in js===========
let car = {
    color: "red",
    model: "2022",
    company: "Audi"    
}
console.log(car.color);
console.log(car["model"])

let propertyName = 'model';

console.log(car[propertyName]="2023")
console.log(car.model="2024")

delete car.model;
console.log(car)


//methods: these are functions inside object
let person = {
    ageCal : function(birthyear){
        return 2023-birthyear;
    }
}

console.log(person.ageCal(2003));


//this keyword
//this is used when we have an object and it had key value pair and it have a method so called function in a object so we can access and modify the properties of object using this key word

let person2 = {
    firstName: "Harry",
    lastName : "Brook",
    city: "Delhi",
    birthyear: 1987,
    Education: "software engineer",
    getSummary: function(){
        return `${this.firstName}`;//person.firstName will also work but insde an object we can use this keyword
    } 
}
console.log(person2.getSummary());

//foreach

let fruits = ['apple','banana','mango'];

fruits.forEach(fruit=>console.log(fruit));
console.log('---------------------------')
fruits.forEach(function(element){
    console.log(element);
})

//object inside array

let blockList = [{userName:'Paul', reason:"Abusive content"},{userName:'shanti', reason:'bakchodi'}];
console.log(blockList);
for(let i =0 ;i<blockList.length;i++){
    console.log(`User ${blockList[i].userName} is blocked due to ${blockList[i].reason}`);
}


//function //call and apply method

let classroom = {//this is parent object
    rollNo:'21',
    class:'8th',
    issued:[],
    issue: function(bookNo,names){
        console.log(`${names} roll no: ${this.rollNo} issued book number: ${bookNo}`);
        this.issued.push({class:`${this.class}`, name:names, rollNo:`${this.rollNo}`, bookNo:bookNo});
    }
}

classroom.issue(553, 'Arpit');
classroom.issue(232,'soxy')
console.log(classroom)

let childClass = {//this is child object
    class:'7th',
    rollNo:'11',
    issued:[],
}



//==========CALL METHOD==================

// let issue = classroom.issue; //issue is regular function
//issue(123,'anuj'); //this value is undefined at global scope

let issue = classroom.issue; //using issue method in parent object and storing in variable

issue.call(childClass, 123, 'Anuj')//using call method to use properties of parent object to child object
//mehtodName.call(nameOFobject, ar1,agr2...)

console.log(childClass)

issue.call(classroom, 1234, 'Arpit')// here he used the same method and called it but inside parent object itself
console.log(classroom)


//===============APPLY METHOD==============
//here we can use array method using apply to fill in object
issue.apply(childClass, [89,'Pal']) 


//=============BIND METHOD=================
//in call you can access the method inside a object
//but when there is no method in object then another funciton is outside the scope of object then we use bind method to bind the function in object so we can use it as property of object 
function greet(){
    console.log(`welcome ${this.firstName} ${this.lastName} on practice code`)
}

let user = {
    firstName:'Arpit',
    lastName:'Anjana'
}

//function.bind(object)
let greets = greet.bind(user);

greets();

//=============for-in loop=====================
let car2 = {
    model:'2022',
    color:'black',
    company:'BMW'
}


for(let key in car2){
    console.log(key);
}
console.log(car2);
let x ='';
for(let key in car2){
    x  = x+car2[key] ; //car2 is object and key is key car2[key] is like accessing car2 objects key's values
}

console.log(x)


//==============ex2 for in loop=========

const object = {a:1, b:2, c:3};

for(const property in object){
    console.log(`${property} : ${object[property]}`)
}

