/* =========================
   STREAM DATA
========================= */

const streamData = [

    {
        id: 1,
        title: "Interstellar",
        category: "Movies",
        type: "Movie",
        genre: "Sci-Fi",
        duration: "120",
        language: "Hollywood",
        image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg",
        video: "https://www.youtube.com/embed/HYVxnPmb15E"
    },

    {
        id: 2,
        title: "Shershaah",
        category: "Movies",
        type: "Movie",
        genre: "Action",
        duration: "120",
        language: "Bollywood",
        image: "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        video: "https://www.youtube.com/embed/V0EQJzfgXvY"
    },

    {
        id: 3,
        title: "Drishyam 2",
        category: "Movies",
        type: "Movie",
        genre: "Adventure",
        duration: "120",
        language: "Bollywood",
        image: "https://assetscdn1.paytm.com/images/cinema/Drishyam-min-f607e2e0-4d39-11ed-a279-f56421cde6f2.jpg?format=webp",
        video: "https://www.youtube.com/embed/tOdJlNKquls"
    },

    {
        id: 4,
        title: "The Dark Knight",
        category: "Movies",
        type: "Movie",
        genre: "Thriller",
        duration: "120",
        language: "Hollywood",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
        video: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },

    {
        id: 5,
        title: "Stranger Things",
        category: "Series",
        type: "Series",
        genre: "Mystery",
        duration: "45",
        language: "English",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/06/03112487_poster_w780.jpg",
        video: "https://www.youtube.com/embed/ncn84cMWgRA"
    },

    {
        id: 6,
        title: "Wednesday",
        category: "Series",
        type: "Series",
        genre: "Fantasy",
        duration: "45",
        language: "English",
        image: "https://image.tmdb.org/t/p/original/kKwy8QiXyQocbDj4haUG0uD1SbF.jpg",
        video: "https://www.youtube.com/embed/Di310WS8zLk"
    }

];


/* =========================
   LIVE DATA
========================= */

const liveData = [

    {
        id: 101,
        title: "Late Night Sessions",
        category: "Live",
        genre: "Music",
        language: "English",
        image: streamImages.concertLive,
        live: true
    },

    {
        id: 102,
        title: "Gaming Arena Live",
        category: "Gaming",
        genre: "Gaming",
        language: "English",
        image: streamImages.gamingLive,
        live: true
    },

    {
        id: 103,
        title: "Global News Live",
        category: "Live",
        genre: "News",
        language: "English",
        image: streamImages.newsLive,
        live: true
    }

];


/* =========================
   FILTER STATE
========================= */

const selectedFilters = {
    category: "",
    genre: "",
    time: "",
    language: ""
};


/* =========================
   DOM ELEMENTS
========================= */

const trendingGrid = document.getElementById("trendingGrid");
const liveGrid = document.getElementById("liveGrid");
const matchGrid = document.getElementById("matchGrid");

const discoverButton = document.getElementById("discoverButton");

const searchButton = document.getElementById("searchButton");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const videoModal = document.getElementById("videoModal");
const closeVideoModal = document.getElementById("closeVideoModal");
const homeVideoPlayer = document.getElementById("homeVideoPlayer");

const roomModal = document.getElementById("roomModal");
const closeRoomModal = document.getElementById("closeRoomModal");
const roomModalTitle = document.getElementById("roomModalTitle");
const roomModalText = document.getElementById("roomModalText");
const roomCodeInput = document.getElementById("roomCodeInput");
const confirmRoomButton = document.getElementById("confirmRoomButton");

const createRoomButton = document.getElementById("createRoomButton");
const joinRoomButton = document.getElementById("joinRoomButton");

const toast = document.getElementById("toast");


/* =========================
   CONTENT CARD
========================= */

function createContentCard(item) {

    return `
        <div class="content-card"
             onclick="openVideo('${item.video || ""}')">

            <div class="content-image">

                <img src="${item.image}" alt="${item.title}">

                <div class="content-play">
                    ▶
                </div>

            </div>

            <div class="content-info">

                <h3>${item.title}</h3>

                <div class="content-meta">
                    <span>${item.genre}</span>
                    <span>${item.language}</span>
                </div>

            </div>

        </div>
    `;

}


/* =========================
   TRENDING
   ALWAYS SHOWS EXACTLY 6 CARDS
========================= */

function renderTrending() {

    if (!trendingGrid) return;

    /*
       Important:
       trendingGrid already has class="content-grid"
       in HTML, so don't create another content-grid.
    */

    trendingGrid.innerHTML = streamData
        .map(item => createContentCard(item))
        .join("");

}


/* =========================
   YOUR MATCH
   ONLY FILTERED RESULTS
========================= */

function renderMatch(data) {

    if (!matchGrid) return;

    // Make matchGrid itself a grid
    matchGrid.classList.add("content-grid");

    if (!data || data.length === 0) {

        matchGrid.innerHTML = `
            <p style="color:#969696; padding:20px 0;">
                No matching content found. Try different filters.
            </p>
        `;

        return;
    }

    /*
       Direct cards only.
       No extra nested content-grid.
    */

    matchGrid.innerHTML = data
        .map(item => createContentCard(item))
        .join("");

}


/* =========================
   LIVE CARD
========================= */

function createLiveCard(item) {

    return `
        <div class="live-card-item"
             onclick="openLivePage()">

            <div class="live-card-image">
                <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="live-card-overlay"></div>

            <div class="live-card-content">

                <span class="live-badge">
                    LIVE NOW
                </span>

                <h3>${item.title}</h3>

                <p>
                    ${item.genre} • ${item.language}
                </p>

            </div>

        </div>
    `;

}


function renderLive() {

    if (!liveGrid) return;

    liveGrid.innerHTML = liveData
        .map(item => createLiveCard(item))
        .join("");

}


function openLivePage() {

    window.location.href = "../member3-live/live.html";

}


/* =========================
   FILTER DROPDOWN
========================= */

function toggleFilter(menuId, buttonElement) {

    const menu = document.getElementById(menuId);

    if (!menu) return;

    const isOpen = menu.classList.contains("show");

    document.querySelectorAll(".filter-menu")
        .forEach(item => {
            item.classList.remove("show");
        });

    document.querySelectorAll(".filter-tab")
        .forEach(item => {
            item.classList.remove("active");
        });

    if (!isOpen) {

        menu.classList.add("show");

        if (buttonElement) {
            buttonElement.classList.add("active");
        }

    }

}


/* =========================
   SELECT FILTER
========================= */

function selectFilter(type, value, buttonElement) {

    selectedFilters[type] = value;

    let labelId = "";

    if (type === "category") {
        labelId = "categoryLabel";
    }

    if (type === "genre") {
        labelId = "genreLabel";
    }

    if (type === "time") {
        labelId = "timeLabel";
    }

    if (type === "language") {
        labelId = "languageLabel";
    }

    const defaultLabels = {
        category: "CATEGORY",
        genre: "GENRE / TYPE",
        time: "TIME",
        language: "LANGUAGE / REGION"
    };

    const label = document.getElementById(labelId);

    if (label) {

        if (value === "") {
            label.textContent = defaultLabels[type];
        } else {
            label.textContent = buttonElement.textContent.trim();
        }

    }

    document.querySelectorAll(".filter-menu")
        .forEach(menu => {
            menu.classList.remove("show");
        });

    document.querySelectorAll(".filter-tab")
        .forEach(tab => {
            tab.classList.remove("active");
        });

}


/* =========================
   DISCOVERY ENGINE
   ONLY YOUR MATCH CHANGES
========================= */

function discoverContent() {

    const category = selectedFilters.category
        .trim()
        .toLowerCase();

    const genre = selectedFilters.genre
        .trim()
        .toLowerCase();

    const time = selectedFilters.time
        .trim();

    const language = selectedFilters.language
        .trim()
        .toLowerCase();


    const filteredData = streamData.filter(item => {

        const itemCategory = item.category
            .trim()
            .toLowerCase();

        const itemGenre = item.genre
            .trim()
            .toLowerCase();

        const itemLanguage = item.language
            .trim()
            .toLowerCase();

        const itemDuration = item.duration
            .trim();


        const categoryMatch =
            category === "" ||
            itemCategory === category;

        const genreMatch =
            genre === "" ||
            itemGenre === genre;

        const timeMatch =
            time === "" ||
            itemDuration === time;

        const languageMatch =
            language === "" ||
            itemLanguage === language;


        return (
            categoryMatch &&
            genreMatch &&
            timeMatch &&
            languageMatch
        );

    });


    // Only Your Match gets filtered results
    renderMatch(filteredData);

    // Trending remains unchanged with all 6 cards
    renderTrending();


    if (filteredData.length === 0) {

        showToast("No matching content found.");

    } else {

        showToast(
            filteredData.length + " result(s) found."
        );

    }


    matchGrid?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================
   VIDEO MODAL
========================= */

function openVideo(videoUrl) {

    if (!videoUrl) {

        showToast("Open Live page to watch this stream.");
        return;

    }

    if (!videoModal || !homeVideoPlayer) return;

    homeVideoPlayer.src = videoUrl;
    videoModal.classList.add("show");

}


function closeVideo() {

    if (!videoModal || !homeVideoPlayer) return;

    videoModal.classList.remove("show");
    homeVideoPlayer.src = "";

}


/* =========================
   SEARCH OVERLAY
========================= */

function openSearchOverlay() {

    if (!searchOverlay || !searchInput) return;

    searchOverlay.classList.add("show");
    searchInput.focus();

}


function closeSearchOverlay() {

    if (!searchOverlay || !searchInput || !searchResults) {
        return;
    }

    searchOverlay.classList.remove("show");
    searchInput.value = "";
    searchResults.innerHTML = "";

}


function searchContent() {

    if (!searchInput || !searchResults) return;

    const query = searchInput.value
        .toLowerCase()
        .trim();


    if (query === "") {

        searchResults.innerHTML = "";
        return;

    }


    const allContent = [
        ...streamData,
        ...liveData
    ];


    const results = allContent.filter(item => {

        return (
            item.title.toLowerCase().includes(query) ||
            item.genre.toLowerCase().includes(query) ||
            item.language.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

    });


    if (results.length === 0) {

        searchResults.innerHTML = `
            <p class="search-result">
                No content found.
            </p>
        `;

        return;

    }


    searchResults.innerHTML = results
        .map(item => {

            return `
                <div class="search-result"
                     onclick="openVideo('${item.video || ""}')">
                    ${item.title}
                </div>
            `;

        })
        .join("");

}


/* =========================
   WATCH TOGETHER
========================= */

function generateRoomCode() {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "SX-";

    for (let i = 0; i < 4; i++) {

        code += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );

    }

    return code;

}


function openRoom(mode) {

    if (!roomModal) return;

    roomModal.classList.add("show");


    if (mode === "create") {

        const code = generateRoomCode();

        localStorage.setItem(
            "streamx-room-code",
            code
        );


        roomModalTitle.textContent = "Room Created";

        roomModalText.innerHTML = `
            Your room code is:
            <strong style="color:#eaff00;">
                ${code}
            </strong>
            <br><br>
            Share this code with your friends.
        `;


        roomCodeInput.style.display = "none";

        confirmRoomButton.textContent = "Copy Room Code";


        confirmRoomButton.onclick = function () {

            if (navigator.clipboard) {
                navigator.clipboard.writeText(code);
            }

            showToast("Room code copied.");

            roomModal.classList.remove("show");

        };


    } else {

        roomModalTitle.textContent = "Join Room";

        roomModalText.textContent =
            "Enter the room code shared by your friend.";

        roomCodeInput.style.display = "block";
        roomCodeInput.value = "";

        confirmRoomButton.textContent = "Join Room";


        confirmRoomButton.onclick = function () {

            const code = roomCodeInput.value
                .toUpperCase()
                .trim();


            if (!/^SX-[A-Z0-9]{4}$/.test(code)) {

                showToast(
                    "Enter a valid code like SX-AB12."
                );

                return;

            }


            showToast("Room joined successfully.");

            roomModal.classList.remove("show");

        };

    }

}


function closeRoom() {

    if (!roomModal) return;

    roomModal.classList.remove("show");

}


/* =========================
   TOAST
========================= */

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================
   MOBILE MENU
========================= */

function toggleMobileMenu() {

    const navLinks = document.getElementById("navLinks");

    if (!navLinks) return;

    navLinks.classList.toggle("show");

}


/* =========================
   DOM CONTENT LOADED
========================= */

document.addEventListener("DOMContentLoaded", function () {

    // Initial content
    renderTrending();
    renderMatch(streamData);
    renderLive();


    // Discover button
    if (discoverButton) {

        discoverButton.addEventListener(
            "click",
            discoverContent
        );

    }


    // Search open
    if (searchButton) {

        searchButton.addEventListener(
            "click",
            openSearchOverlay
        );

    }


    // Search close
    if (closeSearch) {

        closeSearch.addEventListener(
            "click",
            closeSearchOverlay
        );

    }


    // Search typing
    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchContent
        );

    }


    // Video modal close
    if (closeVideoModal) {

        closeVideoModal.addEventListener(
            "click",
            closeVideo
        );

    }


    // Create room
    if (createRoomButton) {

        createRoomButton.addEventListener(
            "click",
            function () {
                openRoom("create");
            }
        );

    }


    // Join room
    if (joinRoomButton) {

        joinRoomButton.addEventListener(
            "click",
            function () {
                openRoom("join");
            }
        );

    }


    // Close room
    if (closeRoomModal) {

        closeRoomModal.addEventListener(
            "click",
            closeRoom
        );

    }


    // Mobile menu
    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    // Close dropdown outside
    document.addEventListener("click", function (event) {

        if (!event.target.closest(".filter-dropdown")) {

            document.querySelectorAll(".filter-menu")
                .forEach(menu => {
                    menu.classList.remove("show");
                });

            document.querySelectorAll(".filter-tab")
                .forEach(tab => {
                    tab.classList.remove("active");
                });

        }

    });


    // Close modals outside
    window.addEventListener("click", function (event) {

        if (event.target === videoModal) {
            closeVideo();
        }

        if (event.target === roomModal) {
            closeRoom();
        }

        if (event.target === searchOverlay) {
            closeSearchOverlay();
        }

    });


    // Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeVideo();
            closeRoom();
            closeSearchOverlay();

        }

    });

});