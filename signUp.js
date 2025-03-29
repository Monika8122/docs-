document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Perform basic validation (you can also integrate backend API calls here)
    if (newUsername && newPassword) {
        // Simulate successful signup
        alert("Signup successful!");

        // Redirect to home page or login page
        window.location.href = "home.html"; // Change this to your actual home page URL
    } else {
        alert("Please enter both username and password.");
    }
});