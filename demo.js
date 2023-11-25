// script.js

window.onload = function() {
    // Set green background color for the 3rd element in the list
    var thirdElement = document.getElementById('items').getElementsByTagName('li')[2];
    thirdElement.style.backgroundColor = 'green';
  
    // Make all elements in the list have bold font
    var listItems = document.getElementById('items').getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].style.fontWeight = 'bold';
    }
    
  var elementsByTagName = document.getElementById('items').getElementsByTagName('li');
  var newLiElementByTagName = elementsByTagName[elementsByTagName.length - 1]; // Get the last li element
  newLiElementByTagName.style.fontSize = '20px'; // Change the font size to 20 pixels
  };
  