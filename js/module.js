export function getData(url, callback) {
    let method = "GET";
    return new Promise((resolve, reject) => {
    fetch(url, {
        method: method
    })
    .then(response => response.json())
    .then(returnData =>{
     if(returnData.code ===200){
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

