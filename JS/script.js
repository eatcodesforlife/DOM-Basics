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

// items.forEach(item => (item.style.backgroundColor = "blue")); this gives error

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

const header = document.querySelector("#main-header");
header.style.borderBottom = "solid 5px red";

const input = document.querySelector("input");
input.value = "hello world!";

const submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

const firsItemOnly = document.querySelector(".list-group-item");
firsItemOnly.style.color = "blue";
