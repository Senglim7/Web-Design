function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (!email.includes("@") || email.length < 5) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    
    alert("Login successful!");
    return true;
}
