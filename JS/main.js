let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// filter event
filter.addEventListener("keyup", filterItems);

// Add item

function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById("item").value;

  // Create new li element

  let li = document.createElement("li");

  // Add class name

  li.className = "list-group-item";

  //Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  //Create del button element

  let deleteBtn = document.createElement("button");

  //Add classes to delete button

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // add text node

  deleteBtn.appendChild(document.createTextNode("x"));

  //Append delete button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items

function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();

  // get list
  let items = itemList.getElementsByTagName("li");
  // convert into array
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
