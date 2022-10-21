import { focusInput } from "../js/module.js";
const loginFOrm = document.getElementById("loginFOrm");

loginFOrm.addEventListener("submit", (event) => {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let LoginUserName = document.getElementById("LoginUserName").value;
  let loginPassword = document.getElementById("loginPassword").value;

  if (LoginUserName == "") {
    errors.userName = "სახელის ველი არ უნდა იყოს ცარიელი";
  } else if (LoginUserName.length < 2) {
    errors.userName = "სახელი არ უნდა იყოს 2 სიმბოლოზე ნაკლები";
  }

  if (loginPassword == "") {
    errors.loginPassword = "პაროლის ველი არ უნდა იყოს ცარიელი";
  } else if (loginPassword.length < 8) {
    errors.loginPassword = "პაროლი არ უნდა იყოს 8 სიმბოლოზე ნაკლები";
  }



  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = "";
  });

  for (let item in errors) {
    let formsErrors = document.getElementById("errors_" + item);

    if (formsErrors) {
      formsErrors.textContent = errors[item];
    }
  }

  const saveMe = document.getElementById("saveMe");

  if (saveMe.checked) {
    Cookies.set("saveUserName", LoginUserName);
    Cookies.set("savePassword", loginPassword);
  } else {
    Cookies.remove("saveUserName");
    Cookies.remove("loginPassword");
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

let saveUser = Cookies.get("saveUserName");
let savePassword = Cookies.get("savePassword");

if (saveUser && savePassword) {
  document.getElementById("LoginUserName").value = saveUser;
  document.getElementById("loginPassword").value = savePassword;
  document.getElementById("saveMe").checked = true;
}

const togglrIcon = document.getElementById("togglrIcon");
const passwordField = document.getElementById("loginPassword");
togglrIcon.addEventListener("click", () => {
  if (passwordField.type == "password") {
    passwordField.setAttribute("type", "text");
    togglrIcon.classList.remove("fa-eye-slash");
    togglrIcon.classList.add("fa-eye");
  } else {
    passwordField.setAttribute("type", "password");
    togglrIcon.classList.remove("fa-eye");
    togglrIcon.classList.add("fa-eye-slash");
  }
});

let input = document.querySelectorAll(".users");
input.forEach((element) => {
 focusInput(element);
});
