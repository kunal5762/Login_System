const bigparent = document.querySelector("#BigBox"); // main box of creating account
const yourForm = document.querySelector("#YourForm"); // my form
const SubmitBtn = document.querySelector(".submitbtn"); // Submit button which move us to wlecome page of account creation
const loginbtn = document.querySelector(".loginbtn"); // this button move us to login page only
const backToSign = document.querySelector("#backToAccount") //This variable help us to move back in account crating page
const signbtn = document.querySelector("#signingBtn"); // this button of login button which we move home page
const logoutbtn = document.querySelector("#logoutbtn") // this move us to lgin pages
function handleSomethingWelcome() {
    let welcomePage = document.querySelector(".welcome-page");

    bigparent.style.display = "none";

    welcomePage.style.display = "flex";

    setTimeout(() => {
        welcomePage.style.display = "none";

        bigparent.style.display = "flex";
    }, 4000);

}
function clearValue() {
    let clearUserName = document.getElementById("UserName").value = "";
    let clearUserEmail = document.getElementById("UserEmail").value = "";
    let clearUserphone_number = document.getElementById("UserPhone").value = "";
    let clerUserdob = document.getElementById("UserDob").value = "";
    let clerUserPassword = document.getElementById("UserPassword").value = "";
}
function storedata() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = {
        Username: document.querySelector("#UserName").value,
        UserEmail: document.querySelector("#UserEmail").value.trim().toLowerCase(),
        Userphone: document.querySelector("#UserPhone").value,
        UserDOB: document.querySelector("#UserDob").value,
        Userpassword: document.querySelector("#UserPassword").value
    }


    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

}
function checkingEmail(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.UserEmail === email.trim().toLowerCase()
    );
}
function checkingForLogin() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loginUserEmail = document.querySelector("#loginEmail").value.trim().toLowerCase();
    const loginPassword = document.querySelector("#loginPassword").value;

    return users.find(user => user.UserEmail === loginUserEmail && user.Userpassword === loginPassword);
}
function handleInputValue() {

    const userName = document.getElementById("UserName").value;
    const userEmail = document.getElementById("UserEmail").value;
    const userphone_number = document.getElementById("UserPhone").value;
    const userdob = document.getElementById("UserDob").value;
    const userPassword = document.getElementById("UserPassword").value;

    if (userName === "" || userEmail === "" || userphone_number === "" || userdob === "" || userPassword === "") {
        alert("something Went wrong please try again");
        return;
    }

    if (checkingEmail(userEmail)) {
        alert("E-mail is already taken please choose another one!");
        return;

    }

    storedata();
    handleSomethingWelcome();
    clearValue();



}
function moveBackToCreation() {
    let loginPage = document.querySelector(".login-parent");

    loginPage.style.display = "none";

    bigparent.style.display = "flex";
    bigparent.classList.add("holographic-container");
}
function moveToLoginPage() {
    let loginPage = document.querySelector(".login-parent");

    bigparent.style.display = "none";

    loginPage.style.display = "flex";


}
function afterLoginWelcome() {
    let loginPage = document.querySelector(".login-parent");
    let loginWelcome = document.querySelector(".Home-Page-Parent");
    loginPage.style.display = "none"
    loginWelcome.style.display = "flex";

}
function moveTologoutPage() {
    let loginPage = document.querySelector(".login-parent");
    let loginWelcome = document.querySelector(".Home-Page-Parent");
    loginWelcome.style.display = "none";
    loginPage.style.display = "flex";
}
// This function handle my creation of account 
SubmitBtn.addEventListener("click", function () {
    handleInputValue();
})

// This function handle my Login page
loginbtn.addEventListener("click", function () {
    moveToLoginPage();
})

// This Function Handle my back to creations
backToSign.addEventListener("click", function () {
    moveBackToCreation();

})

signbtn.addEventListener("click", function () {
    if (checkingForLogin()) {
        afterLoginWelcome();
    }
    else {
        alert("somethinking wrong");
        return;
    }

})
logoutbtn.addEventListener("click",function(){
    moveTologoutPage();
})