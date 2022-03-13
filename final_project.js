
//************** MODAL BOX **************
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

let loginBtn = document.getElementsByTagName("button")[2];
let loginModal = document.querySelectorAll("div.loginModal")[0];
window.addEventListener("click", (event) => {
    if(event.target == loginModal) {
        loginModal.style.display = "none";
    }
})
loginBtn.addEventListener("click",()=>{
    loginModal.style.display = "block";
})


//************** MODAL SELECT COURSE  **************

let parent = document.getElementById("courses-select");
let radioBtns = document.querySelectorAll("input[type=radio]");
let inputBoxes = document.getElementsByTagName("input");
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

//************** Form Alert / Invalid Key**************
let confirmForm = () => {
    if(!formColor(inputBoxes)) {
        alert("Please fill in the information.");
    }
}

let formColor = (inputBoxes) => {
    let flag = true;
    for(let i=0; i<6; i++) {
        if(inputBoxes[i].value == "") {
            inputBoxes[i].style.backgroundColor = "salmon";
            flag = false;
        } else {
            inputBoxes[i].style.backgroundColor = "white";
        }
    }
    return flag;
}

//******* Invalid Key *******

// ID 
inputBoxes[0].addEventListener("keypress", (event) =>{
    if(!(event.keyCode >= 48 && event.keyCode <= 57)) {
        event.preventDefault();
    }
});

// Username
inputBoxes[1].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 33 && event.keyCode <= 57))) {
        event.preventDefault();
    }
});

// Email
inputBoxes[2].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 64))) {
        event.preventDefault();
    }
});

// Password
inputBoxes[3].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 33 && event.keyCode <= 57))) {
        event.preventDefault();
    }
});

// GPA
inputBoxes[4].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode === 46))) {
        event.preventDefault();
    }
});


//************** Students Class (PARENT) **************
let engClass = ["ESL", "TOFEL", "IELTS"];
let careerClass = ["WD", "UI", "UX", "HM", "DM" ];

class Students {
    constructor(id, name, email, password ,gpa) {
        this.id = id;
        this.name= name;
        this.email = email;
        this.password = password;
        this.gpa = gpa;
    }
    
    get ID() {
        return this.id
    }
    set ID(newID) {
        this.id = newID
    }

    get Name() {
        return this.name;
    }
    set Name(newName) {
        this.name = newName;
    }

    get Email() {
        return this.email;
    }
    set Email(newEmail) {
        this.email = newEmail;
    }

    get Password() {
        return this.password
    }
    set Password(newPassword) {
        this.password = newPassword
    }

    get GPA() {
        return this.gpa
    }
    set GPA(newGPA) {
        this.gpa = newGPA
    }
}

//************** EslStudents Class (CHILD) **************
class EslStudents extends Students {
    constructor(id, name, email, password, courseNumber, courseCollection ,gpa) {
        super(id, name, email, password ,gpa);
        this.courseNumber = courseNumber;
        this.courseCollection = courseCollection;
    }
    get CourseNumber() {
        return this.courseNumber;
    }
    set CourseNumber(newCourseNumber) {
        this.courseNumber = newCourseNumber;
    }
    get CourseCollection() {
        return this.courseCollection;
    }
    set CourseCollection(newCourseCollection) {
        this.courseCollection = newCourseCollection;
    }
    getGPA() {

    }
    setCourse() {

    }
    avgGPA() {

    }
}
//************** CareerStudents Class (CHILD) **************
class CareerStudents extends Students {
    constructor(id, name, email, password, courseNumber, courseCollection ,gpa) {
        super(id, name, email, password ,gpa);
        this.courseNumber = courseNumber;
        this.courseCollection = courseCollection;
    }
    get CourseNumber() {
        return this.courseNumber;
    }
    set CourseNumber(newCourseNumber) {
        this.courseNumber = newCourseNumber;
    }
    get CourseCollection() {
        return this.courseCollection;
    }
    set CourseCollection(newCourseCollection) {
        this.courseCollection = newCourseCollection;
    }
    getGPA() {

    }
    setCourse() {

    }
    avgGPA() {
        
    }
}


