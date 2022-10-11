import { getData, errMsg } from "./module.js";
import myJson from '../db/news.json' assert {type: 'json'};

// top news section
const topNewsLeft = document.getElementById("topLeft");
const topNewsRight = document.getElementById("topRight");

getData("./db/topnews.json")
  .then((response) => {
    response.data.shift().forEach((element) => {
      const img = document.createElement("div");
      img.style.backgroundImage = `url('${element.image}')`;
      img.classList.add("top-image-left");
      const h2 = document.createElement("h2");
      h2.classList.add("top-title-left");
      h2.textContent = element.title;
      const span = document.createElement("span");
      span.classList.add("cat-world", "cat-world-top");
      span.textContent = element.category;
      img.appendChild(h2);
      img.appendChild(span);
      topNewsLeft.appendChild(img);
    });
  })
  .catch((err) => {
    errMsg(err);
  });

getData("./db/topnews.json")
  .then((response) => {
    response.data.pop().forEach((element) => {
      const img = document.createElement("div");
      img.style.backgroundImage = `url('${element.image}')`;
      img.classList.add("top-image-right");
      const h2 = document.createElement("h2");
      h2.classList.add("top-title-right");
      h2.textContent = element.title;
      const span = document.createElement("span");
      span.classList.add("cat-world", "cat-world-top");
      span.textContent = element.category;
      img.appendChild(h2);
      img.appendChild(span);
      topNewsRight.appendChild(img);
    });
  })
  .catch((err) => {
    errMsg(err);
  });

// news section
const newsBlcok = document.getElementById("newsBlcok");
const loadMore = document.getElementById("loadMore");
let currentPosts = 4;

function load() {
  getData("./db/news.json")
    .then((response) => {
      const totalItem = response.total;

      response.data.forEach((element) => {
        if (element.id <= currentPosts) {
          const newsArticle = document.createElement("div");
          newsArticle.classList.add("news-article");
          const img = document.createElement("img");
          img.setAttribute("src", element.image);
          img.setAttribute("alt", "Image");
          const h3 = document.createElement("h3");
          h3.classList.add("news-h3");
          h3.textContent = element.title;

          newsArticle.appendChild(img);
          newsArticle.appendChild(h3);
          newsBlcok.appendChild(newsArticle);
        }
        if (currentPosts === totalItem) {
          return;
        }
      });
    })

    .catch((err) => {
      errMsg(err);
    });
}
load();

loadMore.addEventListener("click", function () {
  newsBlcok.innerHTML = "";
  currentPosts += 4;
  load();
});
