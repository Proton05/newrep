// Function to handle form submission
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);

function addItem(event) {
    // Prevent the default form submission
    event.preventDefault();

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
    newItem.textContent = 'Submitted details: ' + submittedDetails.name +" "+submittedDetails.email+" "+submittedDetails.phoneNumber;
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
        displayArea.appendChild(newItem);
    }
};
