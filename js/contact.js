import { focusInput } from "../js/module.js";

const contactInput = document.querySelectorAll(".cont-in");
contactInput.forEach((element) => {
  focusInput(element);
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let names = document.getElementById("names").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let email = document.getElementById("email").value;
  let contText = document.getElementById("contText").value;

  let emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (names == "") {
    errors.names = "სახელის ველი არ უნდა იყოს ცარიელი";
  } else if (names.length < 2) {
    errors.names = "სახელი არ უნდა იყოს 2 სიმბოლოზე ნაკლები";
  }

  if (phone == "") {
    errors.phone = "ტელეფონის ველი არ უნდა იყოს ცარიელი";
  } else if (phone.length < 9) {
    errors.phone = "ტელეფონი არ უნდა იყოს 9 სიმბოლოზე ნაკლები";
  }
  if (!email.match(emailValidation)) {
    errors.email = "ელ ფოსტა არასწორია";
  }
  if (subject == "") {
    errors.subject = "სათაურის ველი არ უნდა იყოს ცარიელი";
  } else if (subject.length < 10) {
    errors.subject = "სათაური არ უნდა იყოს 10 სიმბოლოზე ნაკლები";
  }
  if(contText == ""){
    errors.contText = "ტექსტის ველი არ უნდა იყოს ცარიელი";
  } else if(contText.length < 20){
    errors.contText = "ტექსტი არ უნდა იყოს 20 სიმბოლოზე ნაკლები"
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