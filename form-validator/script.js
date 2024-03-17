const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
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
function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalı`);
  } else if (input.value.length > max) {
    error(input, `${input.value} en çok ${max} karakter olmalı`);
  } else {
    success(input);
  }
}
function checkPasswords(input1, input2) {
  if (input1.value != input2.value) {
    error(input2, "parolalar eşleşmiyor");
  }
}
function checkPhone(input) {
  var exp = /^\d{10}$/;
  if (!exp.test(input.value)) {
    error(input, "Telefon 10 karekterli olmalıdır");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, password, repassword, email]);
  checkEmail(email);
  checkLength(username, 5, 12);
  checkPasswords(password, repassword);
  checkPhone(phone);
});
