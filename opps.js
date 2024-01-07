//========opps==========

//========CONSTRUCTOR==========

let Car = function(color, model){//constructor function
    this.color = color;//this is creating object
    this.model = model;
}
//==========prototype============
Car.prototype.drive = function(){ //method or prototype of car that can be accessed by instances 
    console.log('vroom!')
}

Car.prototype.company = "HONDA";
console.log(Car.prototype); //used for constructor
let instanceOfCar = new Car('black', 2021); //new instance or object is created 
let instanceOfCar2 = new Car('red',2022);

console.log( instanceOfCar, instanceOfCar2);
instanceOfCar.drive();

console.log(instanceOfCar.__proto__);//used for instances that uses prototype



//====================ES6===================

//============CLASS DECLARATION==============
class Bike{
    constructor(color, model){
        this.color = color;
        this.model = model;
    }

    drive2(){
        console.log('driving the car! vrooooom!!')
    }

    get startEngine(){//this is property
        //this is prototype
        console.log('this is start engine method using get');
    }

    set changeColor(color){ // this is property
        console.log(this.color = color);
    }

    get desc(){
        return `Color of bike is ${this.color} and model is ${this.model}`
    }
}

let Honda = new Bike('black', 2023);
console.log(Honda)
Honda.drive2();

//==========Getters and setters=============

Honda.startEngine;//this is property now bcz of get 
Honda.changeColor = 'blue';

console.log(Honda.desc);


Bike.breakMethod = function(){//this is static method not a prototype 
    //this cannot be used in object but in class only
    console.log('break method of car');
}

Bike.breakMethod();


//=============INHERITENCE=============

//parent class
class Plane {
    constructor(color, model){
        this.color = color;
        this.model = model;
    }

}

//child class
class jet extends Plane{
    constructor(color, model, engineCapacity){
        super(color, model);
        this.engineCapacity = engineCapacity;
    }
}

let newJet = new jet('white', 2024, '7000cc');
console.log(newJet)