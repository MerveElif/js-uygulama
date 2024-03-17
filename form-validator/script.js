const form = document.getElementById("form");
const username = document.getElementById("username");
const emailInput = document.getElementById("email"); // Değişken adını emailInput olarak değiştirildi
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.classList.add("is-invalid");
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
}

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    error(username, "Username is required");
  } else {
    success(username);
  }
  if (emailInput.value === "") {
    // emailInput olarak değiştirildi ve value özelliği çağrıldı
    error(emailInput, "Email is required");
  } else if (!validateEmail(emailInput.value)) {
    // emailInput olarak değiştirildi ve value özelliği çağrıldı
    error(emailInput, "Email is wrong");
  } else {
    success(emailInput); // emailInput olarak değiştirildi
  }
  if (password.value === "") {
    error(password, "Password is required");
  } else {
    success(password);
  }
  if (repassword.value === "") {
    error(repassword, "Please confirm your password");
  } else if (password.value !== repassword.value) {
    error(repassword, "Passwords do not match");
  } else {
    success(repassword);
  }
});
