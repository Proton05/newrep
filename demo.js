

window.onload = function() {
  var headerTitle = document.getElementById('header-title');
  headerTitle.textContent = 'Hello World ' + headerTitle.textContent;

  // Add "Hello World" before "Item 1"
  var itemsList = document.getElementById('items');
  var firstItem = itemsList.firstElementChild;
  var newListItem = document.createElement('li');
  newListItem.textContent = 'Hello World ' + firstItem.textContent;
  itemsList.insertBefore(newListItem, firstItem);
  
}