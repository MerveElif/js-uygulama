const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email"); // Değişken adını emailInput olarak değiştirildi
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

function checkEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  if (re) {
    success(email);
  } else {
    error(email, "is required");
  }
}
function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

form.addEventListener("submit", function (e) {
  checkRequired([username, password, repassword, email]);
  checkEmail(email);
});
