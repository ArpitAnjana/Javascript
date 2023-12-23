//========Event Basic===========
let eventElement = document.querySelector('.clickMe');
 
eventElement.addEventListener('click', function(){
console.log('clicked me')
})



let clickList = document.querySelectorAll('ul > li');
// =====select target and reomve it =========
// clickList.forEach(function(element){
//     element.addEventListener('click', function(e){
//         console.log(e.target)
//         console.log('inside li')
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove();
//     })
// })


//==========click button to add==========


const ul = document.querySelector('ul')

let button = document.querySelector('.clickMe');

button.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = 'new li is added';
    ul.append(li)
})

//============bubbling===============

// ul.addEventListener('click', (e)=>{
//     console.log("inside ul")
//     console.log(e.target)
// })


ul.addEventListener('click', (e)=>{
    if(e.target.nodeName == 'LI'){
        e.target.remove();
    }
})