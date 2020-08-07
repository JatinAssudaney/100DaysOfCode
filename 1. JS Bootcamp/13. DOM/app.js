const h1 = document.querySelector("h1");

// style property only contains INLINE styles...
// Even though we gave the h1 a purple color, we still get:
h1.style.color; //""
// Same with any property we did not set inline:
h1.style.fontSize; //""

// We can use getComputedStyle to figure out the ACTUAL styles that are applying:
const compStyles = getComputedStyle(h1);
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.fontSize; //"60px"

const todo = document.querySelector("#todos .todo");

// Setting styles one at a time is not ideal:
// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%'

// We can use a class instead!
// In app.css I've defined a 'done' class that we can apply

// OPTION 1 - using setAttribute
//This adds the class 'done', but it overwrites any existing classes...
// todo.setAttribute('class', 'done');

// OPTION 2 - classList
// We can use the classList property and it's methods to add,remove, and toggle classes!
todo.classList.add("done");
//to remove it
todo.classList.remove("done");
//to toggle:
todo.classList.toggle("done"); //add
todo.classList.toggle("done"); //remove
todo.classList.toggle("done"); //add
todo.classList.toggle("done"); //remove
todo.classList.toggle("done"); //add

// Make a new empty img element:
const newImg = document.createElement("img");
// Add a src:
newImg.src =
  "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg);

// Create a new anchor tag
const newLink = document.createElement("a");
// Set its innerText:
newLink.innerText = "Mr. Bubz Video! CLICK MEEE";
// Set its src:
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

// Select the first paragraph:
const firstP = document.querySelector("p");
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);

const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "I AM A NEW LIST ITEM!";

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI); //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll("li.todo")[2]; //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);

// USING removeChild()
//Select the element you want to remove;
const removeMe = document.querySelector(".special");
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe);

// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1
const h1 = document.querySelector("h1");
h1.remove(); //REMOVE IT!
