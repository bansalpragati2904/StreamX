/* LOGIN */

function login() {

    var email =
        document.getElementById("email").value;

    var password =
        document.getElementById("password").value;


    /* Clear old errors */

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("passwordError").innerHTML = "";


    /* EMAIL VALIDATION */

    if (email == "") {

        document.getElementById("emailError").innerHTML =
            "Please enter your email";

        return;

    }


    if (!email.endsWith("@gmail.com")) {

        document.getElementById("emailError").innerHTML =
            "Enter a valid Gmail address";

        return;

    }


    /* PASSWORD VALIDATION */

    if (password == "") {

        document.getElementById("passwordError").innerHTML =
            "Please enter your password";

        return;

    }


    /* Only alphabets and numbers allowed */

    if (!/^[a-zA-Z0-9]+$/.test(password)) {

        document.getElementById("passwordError").innerHTML =
            "Password should contain only alphabets and numbers";

        return;

    }


    /* Check alphabet */

    if (!/[a-zA-Z]/.test(password)) {

        document.getElementById("passwordError").innerHTML =
            "Password must contain an alphabet";

        return;

    }


    /* Check number */

    if (!/[0-9]/.test(password)) {

        document.getElementById("passwordError").innerHTML =
            "Password must contain a number";

        return;

    }


    /* LOGIN SUCCESSFUL */

    window.location.href = "../member1-home/home.html";

}


/* SHOW SIGNUP */

function showSignup() {

    document.getElementById("loginBox").style.display = "none";

    document.getElementById("signupBox").style.display = "block";

}


/* SHOW LOGIN */

function showLogin() {

    document.getElementById("signupBox").style.display = "none";

    document.getElementById("loginBox").style.display = "block";

}


/* OPEN SIGNUP AUTOMATICALLY FROM LOADING PAGE */

window.addEventListener("DOMContentLoaded", function () {

    var params =
        new URLSearchParams(window.location.search);

    if (params.get("signup") === "true") {

        showSignup();

    }

});


/* SIGNUP */

function signup() {

    var name =
        document.getElementById("name").value;

    var email =
        document.getElementById("signupEmail").value;

    var password =
        document.getElementById("signupPassword").value;


    if (
        name == "" ||
        email == "" ||
        password == ""
    ) {

        alert("Please fill all fields");

    }

    else {

        alert("Account created successfully");

        window.location.href = "../member1-home/home.html";

    }

}


/* EDIT PROFILE */

function editProfile() {

    var newName =
        prompt("Enter your new name");


    if (
        newName != null &&
        newName != ""
    ) {

        document.getElementById("username").innerHTML =
            newName;

    }

}


/* WATCH MOVIE */

function watchMovie(movieName) {

    alert("Playing " + movieName);

}


/* REMOVE MOVIE */

function removeMovie(button) {

    button.parentElement.style.display = "none";

}


/* CONTINUE MOVIE */

function continueMovie(movieName) {

    alert("Continue watching " + movieName);

}


/* CHANGE EMAIL */

function changeEmail() {

    var email =
        prompt("Enter your new email");


    if (
        email != null &&
        email != ""
    ) {

        alert("Email changed successfully");

    }

}


/* CHANGE PASSWORD */

function changePassword() {

    alert("Password change option selected");

}


/* SAVE SETTINGS */

function saveSettings() {

    alert("Settings saved successfully");

}


/* LOGOUT */

function logout() {

    alert("You have been logged out");

    window.location.href = "login.html";

}