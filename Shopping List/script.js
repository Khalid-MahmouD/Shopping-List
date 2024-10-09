// const itemForm = document.getElementById('item-form');
// const itemInput = document.getElementById('item-input');
// const itemList = document.getElementById('item-list');
// const filterInput = document.getElementById('filter');
// const clearBtn = document.getElementById('clear'); // Clear All button

// filterInput.addEventListener('input', filterItems);

// itemForm.addEventListener('submit', addItem);

// itemList.addEventListener('click', removeItem);

// clearBtn.addEventListener('click', clearAllItems);

// function filterItems(event) {
//   const filterText = event.target.value.toLowerCase();
//   const items = Array.from(itemList.querySelectorAll('li')); // Convert NodeList to an array

//   items.forEach((item) => (item.style.display = 'none'));

//   // Use filter() to get only the items that match the filter
//   const filteredItems = items.filter((item) =>
//     item.textContent.toLowerCase().includes(filterText)
//   );

//   // Hide all items first

//   // Show only the filtered items
//   filteredItems.forEach((item) => (item.style.display = 'flex'));
// }

// function removeItem(e) {
//   if (e.target.parentElement.classList.contains('remove-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

// function addItem(e) {
//   e.preventDefault();
//   // Get the input value
//   const newItem = itemInput.value.trim();
//   // Validate the input
//   if (newItem === '') {
//     alert('Please add an item');
//     return;
//   }

//   // Create new li element with the new item text
//   const li = document.createElement('li');
//   li.textContent = newItem;
//   // Create remove button
//   const removeBtn = createButton('remove-item btn-link text-red');

//   // Add li to the DOM
//   li.appendChild(removeBtn);
//   itemList.appendChild(li);

//   itemInput.value = '';
// }

// function createButton(classes) {
//   const button = document.createElement('button');
//   button.className = classes;

//   const icon = createIcon('fa-solid fa-xmark');
//   button.appendChild(icon);

//   return button;
// }

// function createIcon(classes) {
//   const icon = document.createElement('i');
//   icon.className = classes;
//   return icon;
// }

// function clearAllItems() {
//   if (confirm('Are you sure you want to clear all items?')) {
//     // Remove all items from the list
//     while (itemList.firstChild) {
//       itemList.removeChild(itemList.firstChild);
//     }
//   }
// }

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create new li element with the new item text
  const li = document.createElement('li');
  const textNode = document.createTextNode(newItem);
  li.appendChild(textNode);

  // Create remove button
  const button = craeteButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);
  checkUI();
  itemInput.value = '';
}

function craeteButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}
function removeItem(e) {
  if (confirm('Are you sure you want to clear all items?')) {
    if (e.target.parentElement.classList.contains('remove-item')) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function clearAllItems() {
  if (confirm('Are you sure you want to clear all items?')) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
      checkUI();
    }
  }
}
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('li');
  items.forEach((item) => {
    if (item.firstChild.textContent
      .toLowerCase()
      .includes(text)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listers
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAllItems);
itemFilter.addEventListener('input', filterItems);
checkUI();
