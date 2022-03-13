
//************** MODAL BOX **************
let loginBtn = document.getElementsByTagName("button")[1];
let loginModal = document.querySelectorAll("div.loginModal")[0];
window.addEventListener("click", (event) => {
    if(event.target == loginModal) {
        loginModal.style.display = "none";
    }
})
loginBtn.addEventListener("click",()=>{
    loginModal.style.display = "block";
})


let regiBtn = document.getElementsByTagName("button")[0];
let regiModal = document.querySelectorAll("div.regiModal")[0];
window.addEventListener("click", (event) => {
    if(event.target == regiModal) {
        regiModal.style.display = "none";
    }
})
regiBtn.addEventListener("click",()=>{
    regiModal.style.display = "block";
})


//************** MODAL SELECT COURSE  **************

let parent = document.getElementById("courses-select");
let radioBtns = document.querySelectorAll("input[type=radio]");
console.log(radioBtns);

let EnglsihClasses = ["ESL", "TOEFL", "IELTS"];
let CareerClasses = ["WD", "UI", "UX", "HM", "DM"];

let Filler = (ArrayName) =>{
    parent.innerHTML = "";
    for(let value of ArrayName){ 
        selectElement = document.createElement("option");
        selectElement.innerHTML = value;
        parent.appendChild(selectElement);
    }
}
for(let i=0;i<radioBtns.length;i++){
    radioBtns[i].addEventListener("click",(event)=>{
        parent.style.display="block";
        switch(event.target.value){ 
            case "English":
                Filler(EnglsihClasses);
                break;
            case "Career":
                Filler(CareerClasses);
                break;
        }
    })
}












// let loginBtn = document.getElementsByTagName("button")[1];
// let loginModal = document.getElementsByClassName("loginModal");
