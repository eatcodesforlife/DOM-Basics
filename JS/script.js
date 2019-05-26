// // examine the document object: console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123; //changes document title value
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); //selects all HTMLAllCollection in the dom

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// SELECTORS //

// getElementByID //

// console.log(document.getElementById("header-title"))
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "hello!";
// headerTitle.innerText = "hi!";
// console.log(headerTitle.textContent);
// .textContent don't pay attention to style
// .innerText pays attention to style
// headerTitle.innerHTML = "<h3>hello</h3>";
// header.style.borderBottom = "solid 5px #000";

// .getElementsByClassName //

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].innerText = "I was changed!";
// items[1].style.fontWeight = "bold";
// // items[1].style.backgroundColor = "yellow";

// for (i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }

// items.forEach(item => (item.style.backgroundColor = "blue"));// this gives error

// getElementsByTagName //

// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].innerText = "I was changed!";
// li[1].style.fontWeight = "bold";
// // li[1].style.backgroundColor = "yellow";

// for (i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "yellow";
// }

// querySelector //

// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 5px red";

// const input = document.querySelector("input");
// input.value = "hello world!";

// const submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// const firsItemOnly = document.querySelector(".list-group-item");
// firsItemOnly.style.color = "blue";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "red";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.fontSize = "20px";

// querySelectorAll - creates a node list
// const titles = document.querySelectorAll(".title");
// console.log(titles);

// const listItems = document.querySelectorAll(".list-group-item");
// listItems.forEach(list => (list.style.backgroundColor = "yellow"));

// const odd = document.querySelectorAll("li:nth-child(odd)");
// odd.forEach(odds => (odds.style.backgroundColor = "#ccc"));

/****** 
 
NOTE: ES6 array function only works on nodelists

*****/

// DAY 2 //

// traversing the DOM

// const itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#ccc";
// console.log(itemList.parentNode.parentNode);

// parentElement; /* same as parentNode*/
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#ccc";
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); //not recommended since it includes whitespaces

// children - returns an HTML collection
// console.log(itemList.children);
// //selecting a specific item from children
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// //firstChild - will return #text if firstChild is a whitespace... not very useful
// //console(itemList.firstChild)

// //firstElemenChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "I am the first Element Child";

// lastChild - also returns #text if child is whitespace
// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "i am the last LI";

// **nextSibling
// console.log(itemList.nextSibling); // #text

// **nextElementSibling
// console.log(itemList.nextElementSibling);

// **previousSibling
// console.log(itemList.previousSibling);

// **previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "Red";

// createElement

// CREAT A DIV
// const newDiv = document.createElement("div");

// // add class
// newDiv.className = "hello";
// newDiv.id = "hello1";
// // add atttribute
// newDiv.setAttribute("title", "hello Div");
// /* ADDING A CONTENT */
// // Create a text node
// const newDivText = document.createTextNode("Hello World");
// // Add text to div
// newDiv.appendChild(newDivText);

// //insert new element in the DOM
// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

// const subHeader = document.createElement("h2");

// // add class and ID
// subHeader.id = "submarine";
// subHeader.className = "subName";

// // add attribute
// subHeader.setAttribute("name", "Sub-header");

// //add a text content
// const newSubHeaderText = document.createTextNode("I am a sub HEADER");
// subHeader.appendChild(newSubHeaderText);

// //insert sub header after main header
// const nextSibling = document.querySelector("header nextSibling"); // lol! found a use for nextSibling element!
// container.insertBefore(subHeader, nextSibling);
// console.log(subHeader);
// console.log(newDiv);

/*** EVENTS ****/

// const button = document.getElementById("button");
// button.addEventListener("click", buttonClick);

// function buttonClick() {
//   ul.insertBefore(newItem, ul.lastChild);
// }

// // create new Item
// const newItem = document.createElement("li");
// newItem.className = "list-group-item";
// const itemText = document.createTextNode("Item");
// newItem.appendChild(itemText);
// const ul = document.querySelector(".container #items");

// const button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// const output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";
// console.log(e.type) //event type

// mouse positions from the window
// console.log(e.clientX);
// console.log(e.clientY);

// mouse positions on the actual element
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

/**** MOUSE EVENTS *****/

// const button = document.querySelector("#button");
// const box = document.getElementById("box");

// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent)

// box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent); //focus is when you click on an input
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault(); //function to prevent submit button from submitting for the  purpose of this exercise
  console.log("EVENT TYPE: " + e.type);

  // console.log(e.target.value);
  // document.getElementById("output").innerHTML =
  // "<h3>" + e.target.value + "</h3>";

  // output.innerHTML =
  //   "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";

  // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
  // document.body.style.backgroundColor =
  // "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
}
