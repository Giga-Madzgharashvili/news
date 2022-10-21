import { focusInput } from "../js/module.js";

const contactInput = document.querySelectorAll(".cont-in");
contactInput.forEach((element) => {
  focusInput(element);
});

