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













// let loginBtn = document.getElementsByTagName("button")[1];
// let loginModal = document.getElementsByClassName("loginModal");
