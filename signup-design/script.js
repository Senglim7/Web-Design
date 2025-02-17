document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Check if all fields are filled
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Optionally, you can send this data to a server
    alert(`Welcome, ${name}! You have successfully signed up.`);
  });
    
  