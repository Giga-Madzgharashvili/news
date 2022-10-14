const items = document.querySelectorAll(".acordeon-item ");


items.forEach( item =>  {
    item.addEventListener("click", function () {
        console.log(item);
      this.classList.toggle("activeac");
    });
  });