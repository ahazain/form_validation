document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Reset error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Retrieve form inputs
  const username = document
    .getElementById("username")
    .value.trim()
    .toLowerCase(); // Convert username to lowercase
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Username is required";
    return; // Stop further execution
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    return; // Stop further execution
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    return; // Stop further execution
  }

  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";
    return; // Stop further execution
  } else if (password.length < 5 || !/\d/.test(password)) {
    // Check for minimum length and at least 1 digit
    document.getElementById("passwordError").textContent =
      "minimal 5 digit dan minimal angka 1";
    return; // Stop further execution
  }

  // If all validations pass, show success message
  alert("Login sukses");
  // Optionally, you can add code here to reset the form or perform any other action after successful submission
});

// Function to validate email format
function isValidEmail(email) {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
