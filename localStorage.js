//========LOCAL STORAGE========
//=======set item========

// localStorage.setItem('passion', 'exploring');
localStorage.setItem('name', 'arpit');
localStorage.setItem('age', 24);
console.log(localStorage)


//=========get item=========

 console.log(localStorage.getItem('passion'));

 //=======update=====
 //same as set item it will update the value:
 localStorage.setItem('age', 26);
 console.log(localStorage)

 localStorage.setItem('ag',22);
 localStorage.removeItem('ag')

 //============array of object store=========

 //==set item====
 let vehicles = [
    {company:'Honda', model:'2010'},
    {company:'Toyota', model:'2011'}
 ]

 console.log(vehicles)
 let stringofVehicles = JSON.stringify(vehicles);//this is done bcz local storage can save only in string format
localStorage.setItem('vehicles',stringofVehicles);
console.log(localStorage);

//==get item===

let objectformat = localStorage.getItem('vehicles');
let objectFromate = JSON.parse(objectformat)
console.log(objectFromate)