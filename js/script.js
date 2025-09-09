//Part 1: Interactive Elements
function hideElement() {
    document.querySelector("header").style.display = "none";
}
//Part 2: Building interactive elements
// Toggle theme function
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Dropdown menu functionality

// Toggle dropdown visibility
    function toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close dropdown if clicked outside
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }



//Part 3: Form validation
document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // fetch form values
    let username = document.getElementById("username").value.trim(); // after deleting spaces assign user value to variable 
    let email = document.getElementById("email").value.trim(); 
    let password = document.getElementById("password").value.trim();
    
    // clear previous error
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    let isValid = true;

    // validate username
    if (username === "") {
        document.getElementById("usernameError").innerText = "Username is required.";
        isValid = false;
    }   else if (username.length < 3) {
        document.getElementById("usernameError").innerText = "Username must be at least 3 characters.";
        isValid = false;
    }

    // validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    }   else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum six characters, at least one letter and one number
    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    }   else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, including one letter and one number.";
        isValid = false;
        
    }
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); // Reset form fields
    }

}