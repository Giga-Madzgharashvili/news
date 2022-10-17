function getData(url, method) {
  // let method = "";
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
    })
      .then((response) => response.json())
      .then((returnData) => {
        if (returnData) {
            console.log(returnData);
          resolve(returnData);
        } else {
          throw `ERROR ${returnData.code}`;
        }
      })

      .catch((err) => reject(err));
  });
}

function errMsg(info) {
  const errInfo = document.getElementById("info");
  const p = document.createElement("p");
  p.textContent = info;
  p.classList.add("error");
  errInfo.appendChild(p);
}

getData("https://giga-madzgharashvili.github.io/json/news.json", "GET").then((response) => {
  response.data.forEach((element) => {
    // console.log(element);
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
    console.log(id);
    fetch("https://giga-madzgharashvili.github.io/json/news.jsonson/" + id, {
      method: "DELETE",
    });
  });
}
