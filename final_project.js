
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
let submitBtn = document.getElementsByTagName("button")[1];
let submitForm = document.getElementsByTagName("form")[0];
    // submitBtn.disabled = true; //It's an unclickable by defalut.
let loginInputBoxes = document.getElementsByClassName("loginform");

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

submitBtn.addEventListener("click", () => {
    for(let i=0; i<4; i++){
        if(inputBoxes[i].value() == ""){
            submitForm.preventDefault();
        }
    }
})

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

let confirmLoginForm = () => {
    if(!logInFormColor(loginInputBoxes)) {
        alert("Please fill in the information.");
    }
}
let logInFormColor = (loginInputBoxes) => {
    let flag = true;
    for(let i=0; i<2; i++) {
        if(loginInputBoxes[i].value == "") {
            loginInputBoxes[i].style.backgroundColor = "salmon";
            flag = false;
        } else {
            loginInputBoxes[i].style.backgroundColor = "white";
        }
    }
    return flag;
}

//******* Invalid Key *******

//** Register Button **//
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
    if(!((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 64) || (event.keyCode == 46))) {
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

//** Login Button **//

// Login - Username
inputBoxes[7].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 33 && event.keyCode <= 57))) {
        event.preventDefault();
    }
});

// Login - Password
inputBoxes[8].addEventListener("keypress", (event) =>{
    if(!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 33 && event.keyCode <= 57))) {
        event.preventDefault();
    }
});

//************** Students Class (PARENT) **************
let engClass = ["ESL", "TOFEL", "IELTS"];
let careerClass = ["WD", "UI", "UX", "HM", "DM" ];

let courseColection = { //どう使ったらいい？？
    WD: ["html", "CSS", "JS", "JS2", "PHP", "CMS"],
    UI: ["Photoshop", "Swift", "Java", "Javascript", "html", "CSS"],
    UX: ["html", "CSS", "JS", "JS2", "PHP", "CMS"],
    HM: ["Cultural Communication", "Sales & Marketing", "Tourism & Hospitality", "Management", "Tourism", "Business "],
    DM: ["Marketing", "Digital Marketing", "JS", "Web Design", "PHP", "CMS"],
}

class Students {
    constructor(id, name, email, password) {
        this.id = id;
        this.name= name;
        this.email = email;
        this.password = password;
        // this.gpa = gpa;
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


}

//************** EslStudents Class (CHILD) **************

let ESLcourse = ["ESL Reading",  "ESL Listening", "ESL Writing"]
let Tofelcourse = ["Tofel Reading",  "Tofel Listening", "Tofel Writing"]
let IELTScourse = ["IELTS Reading",  "IELTS Listening", "IELTS Writing"]

class EslStudents extends Students {
    constructor(id, name, email, password, courseNumber, courseCollection, gpa) {
        super(id, name, email, password);
        this.courseNumber = courseNumber;
        this.courseCollection = courseCollection;
        this.gpa = gpa;
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
    get GPA() {
        return this.gpa
    }
    set GPA(newGPA) {
        this.gpa = newGPA
    }

    getGPAEng() {
        return this.gpa;
    }
    setCourseEng(num, array) {
        for(let i=0; i<num; i++){
            // wdArray[i]
            return array[i];
        }
    }
    avgGPAEng() {

    }
}
//************** CareerStudents Class (CHILD) **************
class CareerStudents extends Students {
    constructor(id, name, email, password, courseNumber, courseCollection ,gpa) {
        super(id, name, email, password);
        this.courseNumber = courseNumber;
        this.courseCollection = courseCollection;
        this.gpa = gpa;
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

    get GPA() {
        return this.gpa
    }
    set GPA(newGPA) {
        this.gpa = newGPA
    }
    getGPACareer() {
        return this.gpa;
    }
    setCourseCareer(num, array) {
        for(let i=0; i<num; i++){
            // wdArray[i]
            return array[i];
        }
    }
    avgGPACareer() {
        
    }

    
}

//1⃣
// let WD = new Map([1001: ],[1002: "css"]);
// let WD = new Map(["html", 1001],[ "css", 1002],[ "JS", 1003],[ "JS2", 1004],[ "PHP", 1005],[ "CMS", 1006]);
// let WD = new Map([[1001, "html"],[ 1002, "css"],[ 1003, "JS"],[1004, "JS2"],[ 1005, "PHP"],[ 1006, "CMS"]]);
// WD.set(WD.get(1001), 3.5);
// console.log(WD.get("html"));

//2⃣
let StudentA = new CareerStudents(1234, "Bob", "example@gmail.com", "abc123", 1001, "html", 3); 
console.log(StudentA.setCourseCareer(2, courseColection.WD));
console.log(courseColection.WD[5]);

let StudentB = new EslStudents(12345, "Bob", "example1@gmail.com", "abc456", 2001, "ESL Reading", 5); 
console.log(StudentB.setCourseEng(2, ESLcourse));