import { focusInput } from "../js/module.js";
const registrForm = document.getElementById("registrForm");
registrForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let names = document.getElementById("names").value;
  let lastName = document.getElementById("lastName").value;
  let userName = document.getElementById("userName").value;
  let email = document.getElementById("email").value;
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;
  let agreTheme = document.getElementById("agreTheme").checked;
  let emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (names == "") {
    errors.names = "სახელის ველი არ უნდა იყოს ცარიელი";
  } else if (names.length < 2) {
    errors.names = "სახელი არ უნდა იყოს 2 სიმბოლოზე ნაკლები";
  }
  if (lastName == "") {
    errors.lastName = "გვარის ველი არ უნდა იყოს ცარიელი";
  } else if (lastName.length < 4) {
    errors.lastName = "გვარი არ უნდა იყოს 4 სიმბოლოზე ნაკლები";
  }
  if (userName == "") {
    errors.userName = "მომხმარებელის სახელის ველი არ უნდა იყოს ცარიელი";
  } else if (userName.length < 4) {
    errors.userName = "მომხმარებლის სახელი არ უნდა იყოს 4 სიმბოლოზე ნაკლები";
  }
  if (!email.match(emailValidation)) {
    errors.email = "ელ ფოსტა არასწორია";
  }
  if (pass1 == "") {
    errors.pass1 = "პაროლის ველი არ უნდა იყოს ცარიელი";
  } else if (pass1 != pass2) {
    errors.pass2 = "პაროლები არ ემთხვევა ერთმანეთს";
  } else if (pass1.length < 8) {
    errors.pass1 = "პაროლი არ უნდა იყოს 8 სიმბოლოზე ნაკლები";
  }
  if (!agreTheme) {
    errors.agreTheme = "თქვენ უნდა დაეთანხმოთ წესებს და პირობებს";
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
  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

const togglrIcon = document.getElementById("togglrIcon");
const passwordField = document.getElementById("pass1");
const passwordField1 = document.getElementById("pass2");
togglrIcon.addEventListener("click", () => {
  if (passwordField.type == "password") {
    passwordField.setAttribute("type", "text");
    passwordField1.setAttribute("type", "text");
    togglrIcon.classList.remove("fa-eye-slash");
    togglrIcon.classList.add("fa-eye");
  } else {
    passwordField.setAttribute("type", "password");
    passwordField1.setAttribute("type", "password");
    togglrIcon.classList.remove("fa-eye");
    togglrIcon.classList.add("fa-eye-slash");
  }
});

let input = document.querySelectorAll(".users");
input.forEach((element) => {
focusInput(element);

})
