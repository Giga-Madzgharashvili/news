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


function searchPosts(){
getData("./db/news.json")
  .then((response) => {
    response.data.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("search-li");
      const span = document.createElement("span");
      span.textContent = element.title;
      const aTag = document.createElement("a");
      
      close.addEventListener("click", () => {
        search.classList.remove("search");
        searchIcon.classList.add("fa-magnifying-glass");
        searchInput.style = "display: none";
        close.style = "display: none";
        li.classList.remove("show");
      });
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
      item.classList.add("show");
     
    } else {
      item.classList.remove("show");
     
    }
    if (searchInput.value == "") {
      item.classList.remove("show");
    }
  });
  
}

searchInput.addEventListener("input", function (event) {
  filterData(event.target.value);
 
});

// scroll top
const scrolTop = document.getElementById("scrolTop");

scrolTop.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})