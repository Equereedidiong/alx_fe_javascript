// Test running my DOM Manipulation

// 1. Selecting the Button
const test = document.querySelector("#Btn");

console.log(test);

//Adding Event listeners

Btn.addEventListener ('click', () => {
    console.log("You clicked me");     
    

    const Par = document.createElement("p");
    Par.textContent = "This was added from the DOM";


    D.appendChild(Par);

        
});

// Storing the container in a variable
const D = document.querySelector('#container');

//Using query selectors to change text content of HTML elements
 const FirstDiv = document.querySelector('.course');
 FirstDiv.textContent = 'This is the new One Bruh';
 console.log(FirstDiv.textContent); 

  //MODIFYING DOM ELEMENTS
  // Changing elements properties: 
  //a. ModifyInnerHTML
const inner = document.getElementById('course2')
inner.innerHTML = 'This has been updated bro';

const MOD = document.getElementById('course3')
console.log(MOD);
MOD.innerText = "New Inner text"

//Appenchild to Create a nested DOM structure
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);

 //Insert Before
 // Create a new, plain <span> element
 let sp1 = document.createElement("span");

 // Get the reference element
 let sp2 = document.getElementById("childElement");
 // Get the parent element
 let parentDiv = sp2.parentNode;

 // Insert the new element into before sp2
 parentDiv.insertBefore(sp1, sp2);

//Remove child ();

const pickChild = document.getElementById('course4');
console.log(pickChild);

const takeOff = document.getElementById('catch');
const removeNow = pickChild.removeChild(takeOff);   

//Session Storage: sessionStorage.setItem("Key", "Value");

// const Stg = document.getElementById('Storage');
// const sessionStg = document.addEventListener('click', () => {
//   console.log ('You have clicked me')


//    sessionStorage.setItem("userID", "Equere123");
// });

const showData = document.getElementById('Display');
const rtv = document.getElementById('getData');
rtv.addEventListener("click", () => {
  const p = document.createElement("p")
  const seeData = sessionStorage.getItem("user");
  p.textContent = seeData;
  showData.appendChild(p);

});
//Local Storage : All we are doing here is change any method from sessionStorage to localStorage

const Stg = document.getElementById('Storage');
const sessionStg = document.addEventListener('click', () => {
  console.log ('You have clicked me')


   localStorage.setItem("userID", "Equere123");
});

//JSON: Javascript Object Notation: Converting 

const nameR = ["alfred", "dalal", "enos"];
console.log (nameR);

console.log(JSON.stringify(nameR));
