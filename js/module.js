export function getData(url, method) {
    // let method = "GET";
    return new Promise((resolve, reject) => {
    fetch(url, {
        method: method
    })
    .then(response => response.json())
    .then(returnData =>{
     if(returnData.code === 200){
         resolve(returnData)
     } else{
         throw `ERROR ${returnData.code}`
     }
    })
    .catch(err => reject(err))
 
    }) 
    
 };

export function errMsg(info){
    const errInfo = document.getElementById("info");
    const p = document.createElement("p");
    p.textContent = info;
    p.classList.add("error");
    errInfo.appendChild(p);
}

export function focusInput(event) {
    event.addEventListener("focusin", onfocusFunction);
    event.addEventListener("focusout", offFocusFunction);
  
    function onfocusFunction() {
      event.style.background = "#0d111c";
      event.style.border = "2px solid #645e5e";
    }
  
    function offFocusFunction() {
      event.style.background = "";
      event.style.border = "";
    }
  }