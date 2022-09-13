var login = document.getElementById("login");
var signup = document.getElementById("sigup");
var line = document.getElementById("line");

document.querySelector(".login-error").style.display = "none";
document.getElementById("container").style.display = "flex";
document.getElementById("container2").style.display = "none";
document.getElementById("container3").style.display = "none";



// Variables for inputs.
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var address = document.getElementById("address");
var dob = document.getElementById("dob");
var number = document.getElementById("number");
var postal = document.getElementById("postal");
// Variables For inputs end.

// Variables For Login Form;.
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");


// signup.className = "active"
// login.className = "non-active";
// line.innerText = "Sign Up for Free";
// document.getElementById("submit").value = "Get Started";
// document.querySelector("#signup-content").style.display = "block";
// document.querySelector("#login-content").style.display = "none";
document.querySelector(".box").style.display = "none";
document.getElementById("options").style.display = "flex";
function showSignUp() {
    document.querySelector(".box").style.display = "block";
    document.getElementById("options").style.display = "none";
    signup.className = "active"
    login.className = "non-active";
    line.innerText = "Sign Up for Free";
    document.getElementById("submit").value = "Get Started";
    document.querySelector("#signup-content").style.display = "block";
    document.querySelector("#login-content").style.display = "none";
}
function showLogin() {
    document.querySelector(".box").style.display = "block";
    document.getElementById("options").style.display = "none";
    signup.className = "non-active"
    login.className = "active";
    line.innerText = "Welcome Back!";
    document.querySelector("#signup-content").style.display = "none";
    document.querySelector("#login-content").style.display = "block";
    document.getElementById("submit2").value = "LOG IN";
}
function refresh() {
    window.location.reload();
}


// Checkin SignUp Form
function signUpCheck() {
    event.preventDefault();
    if (username.value.length < 3) {
        document.getElementById("username-error").innerText = "At Least 3 Characters";
        return false;
    }
    else {
        document.getElementById("username-error").innerText = "";
        // console.log(username.value);
        // window.localStorage.setItem("user-userName", username.value);
        console.log(window.localStorage.getItem("user-userName"));
        // return username.value;
    }
    if (email.value === "") {
        document.getElementById("email-error").innerText = "Invalid Email";
        return false;
    }
    else {
        document.getElementById("email-error").innerText = "";
    }
    if (password.value.length > 9 || password.value.length < 5) {
        document.getElementById("password-error").innerText = "Invalid Password";
        return false;
    }
    else {
        document.getElementById("password-error").innerText = "";
    }
    if (confirmPassword.value !== password.value) {
        document.getElementById("confirm-Password-error").innerText = "Password Didn't Match";
        return false;
    }
    else {
        document.getElementById("confirm-Password-error").innerText = "";
    }
    if (address.value < 10) {
        document.getElementById("addressError").innerText = "Invalid Address";
        return false;
    }
    else {
        document.getElementById("addressError").innerText = "";
    }
    if (dob.value === "") {
        document.getElementById("dobError").innerText = "Invalid Date";
        return false;
    }
    else {
        document.getElementById("dobError").innerText = "";
    }
    if (document.querySelector(".male").children[0].checked === false && document.querySelector(".female").children[0].checked === false) {
        alert("Please Select Male OR Female.");
        return false;
    }
    if (number.value === "" || number.value.length < 11) {
        document.getElementById("number-error").innerText = "Invalid Number!";
        return false;
    }
    else {
        document.getElementById("number-error").innerText = "";
    }
    if (postal.value === "" || postal.value.length < 5) {
        document.getElementById("postal-error").innerText = "Invalid Postal Code";
        return false;
    }
    else {
        document.getElementById("postal-error").innerText = "";
    }

    if (document.getElementById("username-error").innerText === "" && document.getElementById("email-error").innerText === "" && document.getElementById("password-error").innerText === "" && document.getElementById("confirm-Password-error").innerText === "" && document.getElementById("addressError").innerText === "" && document.getElementById("dobError").innerText === "" && document.getElementById("number-error").innerText === "" && document.getElementById("postal-error").innerText === "") {
        window.localStorage.setItem("user-userName", username.value);
        window.localStorage.setItem("user-email", email.value);
        window.localStorage.setItem("user-password", password.value);
        window.localStorage.setItem("user-address", address.value);
        window.localStorage.setItem("user-dob", dob.value);
        window.localStorage.setItem("user-Number", number.value);
        window.localStorage.setItem("user-postal", postal.value);

        if (document.querySelector(".male").children[0].checked === true) {
            window.localStorage.setItem("user-gender", "Male");
        }
        else if (document.querySelector(".female").children[0].checked === true) {
            window.localStorage.setItem("user-gender", "Female");
        }
    }
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    address.value = "";
    dob.value = "";
    number.value = "";
    postal.value = "";
    // if(document.querySelector(".male").children[0].checked === true){
    //     document.querySelector(".male").children[0].checked === false;
    // }
    // else if(document.querySelector(".female").children[0].checked === true){
    //     document.querySelector(".female").children[0].checked === false;
    // }
    document.querySelector('input[name="gender"]:checked').checked = false;

    document.getElementById("container2").style.display = "flex";
    document.getElementById("container").style.display = "none";
    document.getElementById("container3").style.display = "none";


    // document.querySelector(".female").children[0].checked === false;
    // document.querySelector(".male").children[0].checked === false;
    // window.location.reload();
}
// console.log(window.localStorage.getItem("user-address"));
// if (loginEmail.value !== window.localStorage.getItem("user-email") || loginPassword !== window.localStorage.getItem("user-password")) {
//     document.querySelector(".login-error").style.display = "block";

// }

// console.log(window.localStorage.getItem("user-email"));
// console.log(window.localStorage.getItem("user-password"));

function loginCheck() {
    event.preventDefault();
    if (loginEmail.value !== window.localStorage.getItem("user-email") || loginPassword.value !== window.localStorage.getItem("user-password")) {
        document.querySelector(".login-error").style.display = "flex";
    }
    else if (loginEmail.value === window.localStorage.getItem("user-email") && loginPassword.value === window.localStorage.getItem("user-password")) {
        document.querySelector(".login-error").style.display = "none";
        document.getElementById("container2").style.display = "flex";
        document.getElementById("container").style.display = "none";
        document.getElementById("container3").style.display = "none";

    }
}

 function signOut() {
    window.localStorage.clear();
    document.getElementById("container").style.display = "flex";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
}
function showProfile(){
    document.getElementById("container3").style.display = "flex";
    document.getElementById("container").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("showUserName").innerText = window.localStorage.getItem("user-userName");
    document.getElementById("showUserEmail").innerText = window.localStorage.getItem("user-email");
    document.getElementById("showUserDOB").innerText = window.localStorage.getItem("user-dob");
    document.getElementById("showUserGender").innerText = window.localStorage.getItem("user-gender");
    document.getElementById("showUserNumber").innerText = window.localStorage.getItem("user-Number");
}

