const items = document.querySelectorAll(".acordeon-item ");

items.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("activeac");
  });
});
