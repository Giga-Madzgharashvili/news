import { getData, errMsg } from "./module.js";

  // burger menu
let toggleButton = document.getElementById("burger");
let navigation = document.getElementById("nav");
toggleButton.addEventListener("click", function () {
  navigation.classList.toggle("nav-active");
  toggleButton.classList.toggle("list-active");
});

// header stiky

window.onscroll = function () {
  stikyHeader();
};

let header = document.getElementById("mineHeader");
let sticky = header.offsetTop;

function stikyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// search
const search = document.getElementById("searchBar");
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const close = document.getElementById("close");
const searchResult = document.getElementById("searchResult");
const listItems = [];

searchIcon.addEventListener("click", () => {
  search.classList.add("search");
  searchIcon.classList.remove("fa-magnifying-glass");
  searchInput.style = "display: block;";
  close.style = "display: block;";
});

close.addEventListener("click", () => {
  search.classList.remove("search");
  searchIcon.classList.add("fa-magnifying-glass");
  searchInput.style = "display: none";
  close.style = "display: none";
});
function searchPosts(){
getData("./db/news.json")
  .then((response) => {
    response.data.forEach((element) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = element.title;
      const img = document.createElement("img");
      // console.log(element);
      img.setAttribute("src", element.image);
      img.setAttribute("alt", "image");
      img.classList.add("search-image");
      const aTag = document.createElement("a");
      
      aTag.appendChild(img);
      aTag.appendChild(span);
      li.appendChild(aTag);
      listItems.push(li);
      searchResult.appendChild(li);
     
    });
  })
  .catch((err) => {
    errMsg(err);
  })
}
searchPosts()

function filterData(searchItem) {
  listItems.forEach((item) => {
    if (item.innerText.includes(searchItem)) {
      item.classList.remove("hide");
      searchResult.style = "display: block;"
    } else {
      item.classList.add("hide");
      searchResult.style = "display: none;"
    }
  });
  
}

searchInput.addEventListener("input", function (event) {
  filterData(event.target.value);
 
});