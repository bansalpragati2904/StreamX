/* =========================================================
   STREAMX - COMPLETE JAVASCRIPT
   FLOW:

   SIGNUP
      ↓
   LOADING
      ↓
   HOME

   LOGIN
      ↓
   LOADING
      ↓
   HOME

   HOME
      ↓
   PROFILE / WATCHLIST / HISTORY / SETTINGS
========================================================= */


/* =========================================================
   LOGIN
========================================================= */

function login() {

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    if (email === "") {
        showMessage("Please enter your email.");
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        showMessage("Please enter a valid Gmail address.");
        return;
    }

    if (password === "") {
        showMessage("Please enter your password.");
        return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        showMessage(
            "Password must contain only letters and numbers."
        );
        return;
    }

    if (
        !/[a-zA-Z]/.test(password) ||
        !/[0-9]/.test(password)
    ) {
        showMessage(
            "Password must contain letters and numbers."
        );
        return;
    }

    /*
       Check if account already exists
    */

    var savedEmail =
        localStorage.getItem("userEmail");

    var savedPassword =
        localStorage.getItem("userPassword");


    /*
       If account exists, check details
    */

    if (savedEmail !== null && savedPassword !== null) {

        if (email !== savedEmail) {

            showMessage(
                "Email does not match the registered account."
            );

            return;
        }

        if (password !== savedPassword) {

            showMessage(
                "Incorrect password."
            );

            return;
        }
    }


    /*
       Save login information
    */

    localStorage.setItem(
        "userEmail",
        email
    );


    /*
       If username does not exist,
       create username from email
    */

    if (localStorage.getItem("username") === null) {

        localStorage.setItem(
            "username",
            email.split("@")[0]
        );
    }


    /*
       Mark user as logged in
    */

    localStorage.setItem(
        "loggedIn",
        "true"
    );


    /*
       Successful login
       → Loading
    */

    window.location.href =
        "loading.html";
}


/* =========================================================
   SHOW SIGNUP
========================================================= */

function showSignup() {

    var loginForm =
        document.getElementById("loginForm");

    var signupForm =
        document.getElementById("signupForm");


    if (loginForm && signupForm) {

        loginForm.style.display =
            "none";

        signupForm.style.display =
            "block";
    }
}


/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

    var loginForm =
        document.getElementById("loginForm");

    var signupForm =
        document.getElementById("signupForm");


    if (loginForm && signupForm) {

        signupForm.style.display =
            "none";

        loginForm.style.display =
            "block";
    }
}


/* =========================================================
   SIGNUP
========================================================= */

function signup() {

    var name =
        document.getElementById("name").value.trim();

    var age =
        document.getElementById("age").value;

    var email =
        document.getElementById("signupEmail").value.trim();

    var password =
        document.getElementById("signupPassword").value;


    /*
       Check empty fields
    */

    if (
        name === "" ||
        age === "" ||
        email === "" ||
        password === ""
    ) {

        showSignupMessage(
            "Please fill in all fields."
        );

        return;
    }


    /*
       Check age
    */

    if (
        Number(age) < 1 ||
        Number(age) > 100
    ) {

        showSignupMessage(
            "Please enter a valid age."
        );

        return;
    }


    /*
       Check Gmail
    */

    if (!email.endsWith("@gmail.com")) {

        showSignupMessage(
            "Please enter a valid Gmail address."
        );

        return;
    }


    /*
       Password should contain
       only letters and numbers
    */

    if (!/^[a-zA-Z0-9]+$/.test(password)) {

        showSignupMessage(
            "Password must contain only letters and numbers."
        );

        return;
    }


    /*
       Password must contain
       at least one letter and one number
    */

    if (
        !/[a-zA-Z]/.test(password) ||
        !/[0-9]/.test(password)
    ) {

        showSignupMessage(
            "Password must contain letters and numbers."
        );

        return;
    }


    /*
       Save account details
    */

    localStorage.setItem(
        "username",
        name
    );

    localStorage.setItem(
        "userAge",
        age
    );

    localStorage.setItem(
        "userEmail",
        email
    );

    localStorage.setItem(
        "userPassword",
        password
    );


    /*
       Mark user as logged in
    */

    localStorage.setItem(
        "loggedIn",
        "true"
    );


    /*
       Account created message
    */

    showSignupMessage(
        "Account created successfully!"
    );


    /*
       SIGNUP
       ↓
       LOADING
       ↓
       HOME
    */

    setTimeout(function () {

        window.location.href =
            "loading.html";

    }, 1000);
}


/* =========================================================
   LOGIN MESSAGE
========================================================= */

function showMessage(message) {

    var messageBox =
        document.getElementById("pageMessage");


    if (messageBox) {

        messageBox.innerText =
            message;

        messageBox.style.color =
            "#ff5555";

        messageBox.style.margin =
            "15px 0";
    }
}


/* =========================================================
   SIGNUP MESSAGE
========================================================= */

function showSignupMessage(message) {

    var messageBox =
        document.getElementById(
            "signupMessage"
        );


    if (messageBox) {

        messageBox.innerText =
            message;

        messageBox.style.color =
            "#ff5555";

        messageBox.style.margin =
            "15px 0";
    }
}


/* =========================================================
   LOAD PROFILE
========================================================= */

function loadProfile() {

    var username =
        localStorage.getItem("username");

    var age =
        localStorage.getItem("userAge");

    var email =
        localStorage.getItem("userEmail");


    var nameBox =
        document.getElementById(
            "username"
        );

    var ageBox =
        document.getElementById(
            "userAge"
        );

    var emailBox =
        document.getElementById(
            "userEmail"
        );


    if (nameBox && username) {

        nameBox.innerText =
            username;
    }


    if (ageBox && age) {

        ageBox.innerText =
            age;
    }


    if (emailBox && email) {

        emailBox.innerText =
            email;
    }
}


/* =========================================================
   EDIT PROFILE
========================================================= */

function editProfile() {

    var nameBox =
        document.getElementById(
            "username"
        );

    var ageBox =
        document.getElementById(
            "userAge"
        );


    if (!nameBox || !ageBox) {

        return;
    }


    var currentName =
        localStorage.getItem(
            "username"
        ) || "";


    var currentAge =
        localStorage.getItem(
            "userAge"
        ) || "";


    nameBox.innerHTML =
        '<input type="text" ' +
        'id="newUsername" ' +
        'value="' + currentName + '" ' +
        'placeholder="Enter your name">';


    ageBox.innerHTML =
        '<input type="number" ' +
        'id="newAge" ' +
        'value="' + currentAge + '" ' +
        'placeholder="Enter your age" ' +
        'min="1" max="100">';


    var button =
        document.querySelector(
            ".profile-box > button"
        );


    if (button) {

        button.outerHTML =

            '<button ' +
            'class="save-profile-btn" ' +
            'onclick="saveProfile()">' +
            'Save Profile' +
            '</button>' +

            '<button ' +
            'class="cancel-profile-btn" ' +
            'onclick="cancelEditProfile()">' +
            'Cancel' +
            '</button>';
    }
}


/* =========================================================
   SAVE PROFILE
========================================================= */

function saveProfile() {

    var nameInput =
        document.getElementById(
            "newUsername"
        );

    var ageInput =
        document.getElementById(
            "newAge"
        );


    if (!nameInput || !ageInput) {

        return;
    }


    var newName =
        nameInput.value.trim();

    var newAge =
        ageInput.value;


    if (newName === "") {

        showProfileMessage(
            "Name cannot be empty."
        );

        return;
    }


    if (
        newAge === "" ||
        Number(newAge) < 1 ||
        Number(newAge) > 100
    ) {

        showProfileMessage(
            "Please enter a valid age."
        );

        return;
    }


    localStorage.setItem(
        "username",
        newName
    );

    localStorage.setItem(
        "userAge",
        newAge
    );


    loadProfile();

    restoreEditButton();


    showProfileMessage(
        "Profile updated successfully!"
    );
}


/* =========================================================
   CANCEL PROFILE EDIT
========================================================= */

function cancelEditProfile() {

    loadProfile();

    restoreEditButton();
}


/* =========================================================
   RESTORE EDIT BUTTON
========================================================= */

function restoreEditButton() {

    var profileBox =
        document.querySelector(
            ".profile-box"
        );


    if (!profileBox) {

        return;
    }


    var buttons =
        profileBox.querySelectorAll(
            ".save-profile-btn, .cancel-profile-btn"
        );


    buttons.forEach(function(button) {

        button.remove();

    });


    var editButton =
        document.createElement(
            "button"
        );


    editButton.innerText =
        "Edit Profile";


    editButton.onclick =
        editProfile;


    profileBox.appendChild(
        editButton
    );
}


/* =========================================================
   PROFILE MESSAGE
========================================================= */

function showProfileMessage(message) {

    var messageBox =
        document.getElementById(
            "pageMessage"
        );


    if (messageBox) {

        messageBox.innerText =
            message;

        messageBox.style.color =
            "#ffe500";
    }
}


/* =========================================================
   WATCHLIST TRAILERS
========================================================= */

function watchMovie(movieName) {

    var trailers = {

        "Interstellar":
            "zSWdZVtXT7E",

        "Shershaah":
            "Q0FTXnefVBA",

        "Avengers: Endgame":
            "TcMBFSGVi1c",

        "The Dark Knight":
            "EXeTwQWrcwY"
    };


    var videoId =
        trailers[movieName];


    if (!videoId) {

        var message =
            document.getElementById(
                "watchMessage"
            );


        if (message) {

            message.innerText =
                "Trailer is not available.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    var trailerBox =
        document.getElementById(
            "trailerBox"
        );

    var trailerPlayer =
        document.getElementById(
            "trailerPlayer"
        );

    var trailerTitle =
        document.getElementById(
            "trailerTitle"
        );


    if (
        !trailerBox ||
        !trailerPlayer ||
        !trailerTitle
    ) {

        return;
    }


    trailerTitle.innerText =
        movieName +
        " - Official Trailer";


    trailerPlayer.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?rel=0";


    trailerBox.style.display =
        "block";


    trailerBox.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    var message =
        document.getElementById(
            "watchMessage"
        );


    if (message) {

        message.innerText =
            "Trailer loaded. Press Play to watch.";

        message.style.color =
            "#ffe500";
    }
}


/* =========================================================
   CLOSE TRAILER
========================================================= */

function closeTrailer() {

    var trailerBox =
        document.getElementById(
            "trailerBox"
        );

    var trailerPlayer =
        document.getElementById(
            "trailerPlayer"
        );


    if (trailerPlayer) {

        trailerPlayer.src = "";
    }


    if (trailerBox) {

        trailerBox.style.display =
            "none";
    }
}


/* =========================================================
   REMOVE MOVIE
========================================================= */

function removeMovie(button) {

    var movie =
        button.closest(
            ".movie-card"
        );


    if (!movie) {

        movie =
            button.closest(
                ".movie"
            );
    }


    if (movie) {

        movie.remove();
    }
}


/* =========================================================
   HISTORY
========================================================= */

function continueMovie(movieName) {

    var trailers = {

        "Avengers":
            "TcMBFSGVi1c",

        "Avengers: Endgame":
            "TcMBFSGVi1c",

        "Interstellar":
            "zSWdZVtXT7E",

        "The Dark Knight":
            "EXeTwQWrcwY"
    };


    var videoId =
        trailers[movieName];


    if (!videoId) {

        return;
    }


    var player =
        document.getElementById(
            "trailerPlayer"
        );

    var title =
        document.getElementById(
            "trailerTitle"
        );


    if (player && title) {

        title.innerText =
            movieName +
            " Trailer";


        player.src =
            "https://www.youtube.com/embed/" +
            videoId +
            "?rel=0";


        player.style.display =
            "block";

        title.style.display =
            "block";


        player.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });
    }


    var message =
        document.getElementById(
            "historyMessage"
        );


    if (message) {

        message.innerText =
            "Opening " +
            movieName +
            " trailer...";

        message.style.color =
            "#ffe500";
    }
}


/* =========================================================
   CHANGE EMAIL
========================================================= */

function changeEmail() {

    var modal =
        document.getElementById(
            "emailModal"
        );

    var input =
        document.getElementById(
            "newEmail"
        );


    var currentEmail =
        localStorage.getItem(
            "userEmail"
        ) || "";


    if (input) {

        input.value =
            currentEmail;
    }


    if (modal) {

        modal.style.display =
            "flex";
    }
}


/* =========================================================
   SAVE EMAIL
========================================================= */

function saveEmail() {

    var input =
        document.getElementById(
            "newEmail"
        );

    var message =
        document.getElementById(
            "emailMessage"
        );


    if (!input) {

        return;
    }


    var email =
        input.value.trim();


    if (email === "") {

        if (message) {

            message.innerText =
                "Please enter your email.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    if (!email.endsWith("@gmail.com")) {

        if (message) {

            message.innerText =
                "Please enter a valid Gmail address.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    localStorage.setItem(
        "userEmail",
        email
    );


    var emailBox =
        document.getElementById(
            "userEmail"
        );


    if (emailBox) {

        emailBox.innerText =
            email;
    }


    closeEmailModal();


    showProfileMessage(
        "Email updated successfully."
    );
}


/* =========================================================
   CLOSE EMAIL MODAL
========================================================= */

function closeEmailModal() {

    var modal =
        document.getElementById(
            "emailModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }
}


/* =========================================================
   CHANGE PASSWORD
========================================================= */

function changePassword() {

    var modal =
        document.getElementById(
            "passwordModal"
        );

    var newPassword =
        document.getElementById(
            "newPassword"
        );

    var confirmPassword =
        document.getElementById(
            "confirmPassword"
        );


    if (newPassword) {

        newPassword.value =
            "";
    }


    if (confirmPassword) {

        confirmPassword.value =
            "";
    }


    if (modal) {

        modal.style.display =
            "flex";
    }
}


/* =========================================================
   SAVE PASSWORD
========================================================= */

function savePassword() {

    var passwordInput =
        document.getElementById(
            "newPassword"
        );

    var confirmInput =
        document.getElementById(
            "confirmPassword"
        );

    var message =
        document.getElementById(
            "passwordMessage"
        );


    if (
        !passwordInput ||
        !confirmInput
    ) {

        return;
    }


    var password =
        passwordInput.value;

    var confirmPassword =
        confirmInput.value;


    if (password === "") {

        if (message) {

            message.innerText =
                "Please enter a new password.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    if (!/^[a-zA-Z0-9]+$/.test(password)) {

        if (message) {

            message.innerText =
                "Password must contain only letters and numbers.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    if (
        !/[a-zA-Z]/.test(password) ||
        !/[0-9]/.test(password)
    ) {

        if (message) {

            message.innerText =
                "Password must contain letters and numbers.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    if (password !== confirmPassword) {

        if (message) {

            message.innerText =
                "Passwords do not match.";

            message.style.color =
                "#ff5555";
        }

        return;
    }


    localStorage.setItem(
        "userPassword",
        password
    );


    closePasswordModal();


    showProfileMessage(
        "Password updated successfully."
    );
}


/* =========================================================
   CLOSE PASSWORD MODAL
========================================================= */

function closePasswordModal() {

    var modal =
        document.getElementById(
            "passwordModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }
}


/* =========================================================
   SELECT PLAN
   ALL 3 PLAN BUTTONS WORK
========================================================= */

function selectPlan(price, planName, button) {

    var selectedPlan =
        document.getElementById(
            "selectedPlan"
        );


    /*
       Save selected plan
    */

    localStorage.setItem(
        "selectedPlan",
        planName
    );

    localStorage.setItem(
        "planPrice",
        price
    );


    /*
       Display selected plan
    */

    if (selectedPlan) {

        selectedPlan.innerHTML =
            "✓ " +
            planName +
            " Plan selected - ₹" +
            price +
            " per month";

        selectedPlan.style.color =
            "#ffe500";
    }


    /*
       Settings message
    */

    var settingsMessage =
        document.getElementById(
            "settingsMessage"
        );


    if (settingsMessage) {

        settingsMessage.innerText =
            planName +
            " Plan selected successfully!";

        settingsMessage.style.color =
            "#ffe500";
    }


    /*
       Remove selected class
       from all plan buttons
    */

    var buttons =
        document.querySelectorAll(
            ".plan-card button"
        );


    buttons.forEach(function(btn) {

        btn.classList.remove(
            "selected"
        );

    });


    /*
       Add selected class
       to clicked button
    */

    if (button) {

        button.classList.add(
            "selected"
        );
    }
}


/* =========================================================
   LOAD SELECTED PLAN
========================================================= */

function loadSelectedPlan() {

    var plan =
        localStorage.getItem(
            "selectedPlan"
        );

    var price =
        localStorage.getItem(
            "planPrice"
        );


    var selectedPlan =
        document.getElementById(
            "selectedPlan"
        );


    if (
        plan &&
        price &&
        selectedPlan
    ) {

        selectedPlan.innerHTML =
            "✓ Current Plan: " +
            plan +
            " - ₹" +
            price +
            " per month";

        selectedPlan.style.color =
            "#ffe500";
    }


    /*
       Make saved plan button active
    */

    var buttons =
        document.querySelectorAll(
            ".plan-card button"
        );


    buttons.forEach(function(button) {

        button.classList.remove(
            "selected"
        );


        if (
            plan &&
            button.dataset.plan === plan
        ) {

            button.classList.add(
                "selected"
            );
        }

    });
}


/* =========================================================
   SAVE SETTINGS
========================================================= */

function saveSettings() {

    var autoplayBox =
        document.getElementById(
            "autoplay"
        );

    var qualityBox =
        document.getElementById(
            "quality"
        );

    var notificationBox =
        document.getElementById(
            "notification"
        );


    if (
        !autoplayBox ||
        !qualityBox ||
        !notificationBox
    ) {

        return;
    }


    localStorage.setItem(
        "autoplay",
        autoplayBox.checked
    );

    localStorage.setItem(
        "quality",
        qualityBox.value
    );

    localStorage.setItem(
        "notification",
        notificationBox.checked
    );


    var message =
        document.getElementById(
            "settingsMessage"
        );


    if (message) {

        message.innerText =
            "Settings saved successfully!";

        message.style.color =
            "#ffe500";
    }
}


/* =========================================================
   LOAD SETTINGS
========================================================= */

function loadSettings() {

    var autoplay =
        localStorage.getItem(
            "autoplay"
        );

    var quality =
        localStorage.getItem(
            "quality"
        );

    var notification =
        localStorage.getItem(
            "notification"
        );


    var autoplayBox =
        document.getElementById(
            "autoplay"
        );

    var qualityBox =
        document.getElementById(
            "quality"
        );

    var notificationBox =
        document.getElementById(
            "notification"
        );


    if (
        autoplayBox &&
        autoplay !== null
    ) {

        autoplayBox.checked =
            autoplay === "true";
    }


    if (
        qualityBox &&
        quality !== null
    ) {

        qualityBox.value =
            quality;
    }


    if (
        notificationBox &&
        notification !== null
    ) {

        notificationBox.checked =
            notification === "true";
    }
}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    /*
       Remove login status only.

       DO NOT DELETE:
       username
       age
       email
       password
       selected plan
    */

    localStorage.removeItem(
        "loggedIn"
    );


    /*
       Go back to login
    */

    window.location.href =
        "login.html";
}


/* =========================================================
   LOADING PAGE
========================================================= */

/*
   IMPORTANT:

   Loading ke baad HOME page open hoga.

   Pehle code mein:
       profile.html

   tha.

   Ab:
       home.html

   hai.
*/

function startLoading() {

    setTimeout(function () {

        window.location.href =
            "home.html";

    }, 2000);
}


/* =========================================================
   PROTECT HOME PAGE
========================================================= */

function checkLogin() {

    var loggedIn =
        localStorage.getItem(
            "loggedIn"
        );


    /*
       Agar login/signup nahi hua
       to login page par bhejo.
    */

    if (loggedIn !== "true") {

        window.location.href =
            "login.html";
    }
}


/* =========================================================
   DOM CONTENT LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /*
           Load profile information
        */

        loadProfile();


        /*
           Load selected plan
        */

        loadSelectedPlan();


        /*
           Load saved settings
        */

        loadSettings();


        /*
           Loading page check
        */

        var loadingPage =
            document.querySelector(
                ".loading-page"
            );


        if (loadingPage) {

            startLoading();

        }


    }
);