document.getElementById('registrationForm').addEventListener('submit', function(event) {
// Prevent the default form submission (page reload)
event.preventDefault();
// Get input values
const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
// Basic validation check
if (username && email && password) {
    console.log("Registration successful for: " + username);
// Redirect to the chosen page
location.href = "home.html";        
    } else {
        alert("Please fill in all required fields!");
    }
});