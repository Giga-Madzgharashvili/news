import { getData, errMsg } from "./module.js";
import myJson from "../db/news.json" assert { type: "json" };
// header stiky

window.onscroll = function() {stikyHeader()};

let header = document.getElementById("mineHeader");
let sticky = header.offsetTop;

function stikyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

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
// last news
const lastNews = document.getElementById("lastNews");
getData("./db/news.json")
  .then((response) => {
    response.data.forEach((element) => {
      // console.log(element);
      if (element.id > 3 && element.id < 10) {
        const div = document.createElement("div");
        div.classList.add("last-news-article");
        const img = document.createElement("img");
        img.setAttribute("src", element.image);
        img.setAttribute("alt", "Image");
        const h3 = document.createElement("h3");
        h3.classList.add("news-h3");
        h3.textContent = element.title;

        div.appendChild(img);
        div.appendChild(h3);
        lastNews.appendChild(div);
      }
    });
  })
  .catch((err) => {
    errMsg(err);
  });
// footer posts
const footPost = document.getElementById("footerPosts");
getData("./db/news.json")
.then((response) => {
  response.data.forEach((element) =>{
    if(element.id > 9){
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
  })
})

.catch((err) => {
  errMsg(err);
});
// instagram
const inst = document.getElementById("instContent");
getData("./db/news.json")
.then((response) =>{
  response.data.forEach(element => {
    if(element.id > 0 && element.id < 10){
      console.log(element);
      const div = document.createElement("div")
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


// burger menu
let toggleButton = document.getElementById('burger');
let navigation = document.getElementById('nav');
toggleButton.addEventListener('click', function() {
  navigation.classList.toggle('nav-active');
  toggleButton.classList.toggle('list-active');
});