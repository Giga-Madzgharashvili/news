import { getData, errMsg } from "./module.js";

// footer posts
const footPost = document.getElementById("footerPosts");
getData("./db/news.json")
  .then((response) => {
    response.data.forEach((element) => {
      if (element.id > 9) {
        const div = document.createElement("div");
        div.classList.add("min-posts");
        const img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", "image");
        img.classList.add("min-image");
        const h3 = document.createElement("h3");
        h3.textContent = element.title;
        h3.classList.add("min-title");
        div.appendChild(img);
        div.appendChild(h3);
        footPost.appendChild(div);
      }
    });
  })

  .catch((err) => {
    errMsg(err);
  });
// instagram
const inst = document.getElementById("instContent");
getData("./db/news.json")
  .then((response) => {
    response.data.forEach((element) => {
      if (element.id > 0 && element.id < 10) {
        // console.log(element);
        const div = document.createElement("div");
        div.classList.add("inst-block");
        const aTag = document.createElement("a");
        aTag.setAttribute("href", "#");
        const img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", "image");
        img.classList.add("inst-image");
        aTag.appendChild(img);
        div.appendChild(aTag);
        inst.appendChild(div);
      }
    });
  })
  .catch((err) => {
    errMsg(err);
  });