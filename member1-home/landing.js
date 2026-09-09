/* =====================================================
   STREAMX LANDING PAGE JS
===================================================== */


/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = document.getElementById("themeIcon");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeIcon.textContent = "☀";

        localStorage.setItem("streamxTheme", "light");

    } else {

        themeIcon.textContent = "☾";

        localStorage.setItem("streamxTheme", "dark");

    }

});



/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme = localStorage.getItem("streamxTheme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.textContent = "☀";

} else {

    themeIcon.textContent = "☾";

}



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});