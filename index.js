//===========Form==============

let form = document.querySelector('.signUp')
// let email = document.querySelector('#email')
// let pass = document.querySelector('#password')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('you submited the form')
//     // console.log(email.value, pass.value) //this is when you have to use querrySelector
//     //=====now using name in form:======
//     console.log(form.email.value, form.password.value)
// })

//===========Form regular expression (regex)=========

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern)
    console.log(result)
    if(result){
        console.log("strong password")
    }
    else{
        console.log('weak pass')
    }
})


//================Array methods===========

//===========splice==========

let num = [5,2,3,4,5];

let result2 = num.splice(1,1,1); //splice(indexNumber, howManyDelete after index, change with)
console.log(num)
console.log(result2)


//==========map method============

let salaries = [10,20,30,40,50];

let newSalary = salaries.map(salary=>{
    let incrementAmount = salary/2;
    return salary + incrementAmount;
})

console.log(newSalary)




//===============filter==============

let gifts = ['watch', 'car' ,'watch', 'bike', 'bike', 'tv']

let filterarray = gifts.filter(gift=>{
    if(gift == 'car' || gift == 'watch'){
        return gift
    }
})


console.log(filterarray)
console.log(gifts)


//=============reduce==========


// jab bhe 1 output chiye to reduce use krte he 

let num90 = [1,2,3,4,5];
let sum = num90.reduce(function(total, current){
     return total + current;
},0)

console.log(sum)  

//=========flat==========
//its used in subarray for concatenation 1 k piche 1 

let arr = [1,2,3,[4,5,6,[7,8,9]]];

console.log(arr)
let flatArr = arr.flat(1); // (2) krne se 2 level tk kr dega concatenate
console.log(flatArr)

//==============flatMap()============

let cart = [{
    name: 'mobile',
    pirce: 50000,
    qty: 2
}, 
{
    name: 'laptop',
    price: 100000,
    qty:1
}]

let newCart = cart.flatMap(item=>{
    if(item.name === "mobile"){
        return [item,{
            name: "screen guard",
            qty:1,
            price:0
        }]
    }
    else{
        return [item]
    }
})
//if we use map instead of flatMap then these we have to add in the last :
//1> .reduce((previous, current)=> previous.concat(current),[]); 
//2> .flat()

console.log(cart);
console.log(newCart)


//================sorting================

let letters = ['d','e','f','a'];
console.log(letters.sort()) 

//but this wont work on neg numbers 


let nums = [-12,-2,1,8,4,-8];
console.log("before sorting\n"+nums)

nums.sort((a,b)=>{
    if(a<b){
        return -1;
    }
    if(a>b){
        return b === a; // swap here if previous value is bigger than current
    }
})

console.log(nums);

console.log("short method: "+nums.sort((a,b)=> b-a)) // decending order

let num3 = [1,2,3,4,5,6];
let result3 = num3.slice(0,3).splice(2,1,7);
console.log(num3, result3)