// Function to handle form submission
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);

function addItem(e) {
    // Prevent the default form submission
    e.preventDefault();

    // Get values from input fields
    var name = document.getElementById('item').value;
    var emailid = document.getElementById('item2').value;
    var number = document.getElementById('item3').value;

    // Create an object with submitted details
    var submittedDetails = {
        name: name,
        email: emailid,
        phoneNumber: number
    };

    // Display the submitted details on the screen
    var displayArea = document.getElementById('items');
    var newItem = document.createElement('li');
    newItem.textContent = 'Submitted details: ' + submittedDetails.name +" "+submittedDetails.email+" "+submittedDetails.phoneNumber
    displayArea.appendChild(newItem);

    
    // Create a delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
    deleteButton.addEventListener('click', function () {
        // Remove the list item from the screen
        displayArea.removeChild(newItem);
        // Remove the item from local storage
        localStorage.removeItem('submittedDetails');
    });

    // Append delete button to the list item
    newItem.appendChild(deleteButton);

    // Append the list item to the display area
    displayArea.appendChild(newItem);

    // Store the submitted details in local storage as JSON
    var storedDetails = JSON.stringify(submittedDetails);
    localStorage.setItem('submittedDetails', storedDetails);

    // Clear the form fields after submission
    form.reset();
}

// Check if there are submitted details in local storage on page load
window.onload = function () {
    var storedDetails = localStorage.getItem('submittedDetails');
    if (storedDetails) {
        // Display the stored details on the screen
        var displayArea = document.getElementById('items');
        var newItem = document.createElement('li');
        newItem.textContent = 'Stored Details from Local Storage: ' + storedDetails;
        
        // Create a delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'ml-2');
        deleteButton.addEventListener('click', function () {
            // Remove the list item from the screen
            displayArea.removeChild(newItem);
            // Remove the item from local storage
            localStorage.removeItem('submittedDetails');
        });

        // Append delete button to the list item
        newItem.appendChild(deleteButton);

        // Append the list item to the display area
        displayArea.appendChild(newItem);

    }
};
