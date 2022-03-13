let regiBtn = document.getElementsByTagName("button")[0];
let regiModal = document.getElementsByClassName("regiModal");

window.addEventListener("click", (event) => {
    if(event.target == regiBtn) {
        regiBtn.style.display = "none";
    }
})

// let loginBtn = document.getElementsByTagName("button")[1];
// let loginModal = document.getElementsByClassName("loginModal");
