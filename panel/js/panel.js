import { focusInput } from "../../js/module.js";

fetch("https://newsfakedata.herokuapp.com/posts")
  .then((response) => response.json())
  .then((response) => {
    response.forEach((element) => {
      createPost(element);
    });
  });
const panelPosts = document.getElementById("panelPosts");
function createPost(event) {
  const div = document.createElement("div");
  div.setAttribute("data-id", event.id);
  div.classList.add("panel-content");
  const img = document.createElement("img");
  img.src = event.image;
  const h3 = document.createElement("h3");
  h3.classList.add("news-h3");
  h3.textContent = event.title;
  const deletePost = document.createElement("i");
  deletePost.classList.add("fa-regular", "fa-trash-can", "delete");
  deletePost.setAttribute("data-id", event.id);

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(deletePost);
  panelPosts.appendChild(div);

  deletePost.addEventListener("click", (event) => {
    let id = event.target.getAttribute("data-id");

    fetch(`https://newsfakedata.herokuapp.com/posts/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
}
// add posts

const addBtn = document.getElementById("addBtn");
const addover = document.getElementById("addover");
const addForm = document.getElementById("addForm");

addBtn.addEventListener("click", () => {
  addover.classList.add("addactive");
});

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const sendData = {
    title: event.target[0].value,
    // კონსოლში აგდებს შეცდომას ამის გარეშე და ამიტომ გავატანე იმიჯი. ფაილის ატვირთვა ვერ გავაკეთე :(
    image: event.target[2].value,
    content: event.target[1].value,
  };

  fetch("https://newsfakedata.herokuapp.com/posts/", {
    method: "POST",
    body: JSON.stringify(sendData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => {
      setTimeout(() => {
        addover.classList.remove("addactive");
        window.location.reload();
      }, 1000);
    });
});

const input = document.getElementById("addTitle");
const addContent = document.getElementById("addContent");
input.addEventListener("focus", focusInput(input));
addContent.addEventListener("focus", focusInput(addContent));
