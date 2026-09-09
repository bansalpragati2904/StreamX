/* =========================================================
   STREAMX - HOME PAGE JAVASCRIPT
   Member 1 - Home & Discovery
========================================================= */


/* =========================================================
   STREAM DATA
========================================================= */

const streamData = [

    {
        title: "Midnight Signal",
        category: "Movies",
        genre: "Thriller",
        language: "English",
        time: 108,
        image: "midnightSignal",
        rating: 96
    },

    {
        title: "Seoul After Dark",
        category: "Series",
        genre: "Drama",
        language: "Korean",
        time: 45,
        image: "seoulAfterDark",
        rating: 94
    },

    {
        title: "Laugh Track",
        category: "Series",
        genre: "Comedy",
        language: "English",
        time: 45,
        image: "laughTrack",
        rating: 91
    },

    {
        title: "The Last Summer",
        category: "Movies",
        genre: "Romcom",
        language: "Bollywood",
        time: 120,
        image: "lastSummer",
        rating: 89
    },

    {
        title: "Neon Arena",
        category: "Gaming",
        genre: "Gaming",
        language: "English",
        time: 60,
        image: "neonArena",
        rating: 88
    },

    {
        title: "Tokyo Frequency",
        category: "Podcasts",
        genre: "Music",
        language: "Japanese",
        time: 45,
        image: "tokyoFrequency",
        rating: 86
    },

    {
        title: "Red Room",
        category: "Movies",
        genre: "Horror",
        language: "English",
        time: 108,
        image: "redRoom",
        rating: 84
    },

    {
        title: "Istanbul Stories",
        category: "Series",
        genre: "Drama",
        language: "Turkish",
        time: 45,
        image: "istanbulStories",
        rating: 82
    },

    {
        title: "Laugh in 15",
        category: "Shorts",
        genre: "Comedy",
        language: "English",
        time: 15,
        image: "laughIn15",
        rating: 80
    },

    {
        title: "Dragon Code",
        category: "Series",
        genre: "Sci-Fi",
        language: "Chinese",
        time: 60,
        image: "dragonCode",
        rating: 78
    },

    {
        title: "Final Whistle",
        category: "Live",
        genre: "Sports",
        language: "English",
        time: 120,
        image: "finalWhistle",
        rating: 76
    },

    {
        title: "Crime Files",
        category: "Podcasts",
        genre: "Crime",
        language: "English",
        time: 45,
        image: "crimeFiles",
        rating: 74
    },

    {
        title: "Mumbai Nights",
        category: "Movies",
        genre: "Drama",
        language: "Bollywood",
        time: 120,
        image: "mumbaiNights",
        rating: 72
    },

    {
        title: "K-Stage",
        category: "Live",
        genre: "Music",
        language: "Korean",
        time: 120,
        image: "kStageLive",
        rating: 70
    },

    {
        title: "Pixel Rush",
        category: "Gaming",
        genre: "Gaming",
        language: "English",
        time: 60,
        image: "pixelRush",
        rating: 68
    },

    {
        title: "Beyond Earth",
        category: "Movies",
        genre: "Sci-Fi",
        language: "English",
        time: 120,
        image: "beyondEarth",
        rating: 66
    },

    {
        title: "Tokyo in 60 Seconds",
        category: "Shorts",
        genre: "Drama",
        language: "Japanese",
        time: 15,
        image: "tokyo60",
        rating: 64
    },

    {
        title: "Love, Again",
        category: "Movies",
        genre: "Romcom",
        language: "Korean",
        time: 108,
        image: "loveAgain",
        rating: 62
    }

];


/* =========================================================
   UNIQUE TRENDING IMAGE FALLBACKS
========================================================= */

const uniqueImageFallbacks = {

    midnightSignal:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",

    /* FIXED - SEOUL */
    seoulAfterDark:
        "https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=1200&q=85",

    laughTrack:
        "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=85",

    lastSummer:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",

    neonArena:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",

    tokyoFrequency:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",

    redRoom:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",

    istanbulStories:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=85",

    laughIn15:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

    dragonCode:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",

    finalWhistle:
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=85",

    crimeFiles:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85",

    mumbaiNights:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",

    kStageLive:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff39?auto=format&fit=crop&w=1200&q=85",

    pixelRush:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",

    beyondEarth:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=85",

    tokyo60:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",

    loveAgain:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85"

};


/* =========================================================
   LIVE DATA
========================================================= */

const liveData = [

    {
        title: "Global Football Night",
        viewers: "42K",
        type: "Sports",
        image: "footballLive"
    },

    {
        /* FIXED */
        title: "Late Night Sessions",
        viewers: "18K",
        type: "Music",
        image: "concertLive"
    },

    {
        title: "Pro Gaming Arena",
        viewers: "31K",
        type: "Gaming",
        image: "gamingLive"
    }

];


/* =========================================================
   LIVE IMAGE FALLBACKS
========================================================= */

const liveImageFallbacks = {

    footballLive:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85",

    /* FIXED - LIVE MUSIC */
    concertLive:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff39?auto=format&fit=crop&w=1200&q=85",

    /* FIXED - LIVE GAMING */
    gamingLive:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85"

};


/* =========================================================
   FILTER STATE
========================================================= */

let selectedFilters = {

    category: "All",
    genre: null,
    time: null,
    language: null

};


/* =========================================================
   DOM
========================================================= */

const trendingGrid =
    document.getElementById("trendingGrid");

const liveGrid =
    document.getElementById("liveGrid");

const toast =
    document.getElementById("toast");


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   TIME FORMAT
========================================================= */

function formatTime(minutes) {

    if (minutes < 60) {

        return minutes + " min";

    }

    const hours =
        Math.floor(minutes / 60);

    const mins =
        minutes % 60;

    if (mins === 0) {

        return hours + " hr";

    }

    return (
        hours +
        " hr " +
        mins +
        " min"
    );

}


/* =========================================================
   IMAGE FUNCTION
========================================================= */

function getImage(type) {

    /* Trending unique images first */
    if (uniqueImageFallbacks[type]) {

        return uniqueImageFallbacks[type];

    }


    /* Live unique images */
    if (liveImageFallbacks[type]) {

        return liveImageFallbacks[type];

    }


    /* images.js */
    if (
        typeof streamImages !== "undefined" &&
        streamImages[type]
    ) {

        return streamImages[type];

    }


    return "";

}


/* =========================================================
   CONTENT CARD
========================================================= */

function createContentCard(item) {

    const card =
        document.createElement("div");

    card.className =
        "content-card";


    const image =
        document.createElement("div");

    image.className =
        "content-image";


    image.style.backgroundImage =
        `url("${getImage(item.image)}")`;


    const info =
        document.createElement("div");

    info.className =
        "content-info";


    const title =
        document.createElement("h3");

    title.textContent =
        item.title;


    const meta =
        document.createElement("div");

    meta.className =
        "content-meta";


    const rating =
        document.createElement("span");

    rating.textContent =
        "★ " +
        (item.rating / 10).toFixed(1);


    const time =
        document.createElement("span");

    time.textContent =
        formatTime(item.time);


    const category =
        document.createElement("span");

    category.textContent =
        item.category;


    meta.appendChild(rating);
    meta.appendChild(time);
    meta.appendChild(category);


    info.appendChild(title);
    info.appendChild(meta);


    card.appendChild(image);
    card.appendChild(info);


    card.addEventListener(
        "click",
        function () {

            showToast(
                item.title +
                " selected"
            );

        }
    );


    return card;

}


/* =========================================================
   TRENDING
========================================================= */

function renderTrending(data) {

    if (!trendingGrid) return;

    trendingGrid.innerHTML = "";


    if (data.length === 0) {

        trendingGrid.innerHTML = `

            <p style="
                grid-column:1/-1;
                color:#888;
                padding:30px 0;
            ">

                No content found for these filters.

            </p>

        `;

        return;

    }


    data
        .slice(0, 8)
        .forEach(function (item) {

            trendingGrid.appendChild(
                createContentCard(item)
            );

        });

}


/* =========================================================
   LIVE CARD
========================================================= */

function createLiveCard(item) {

    const card =
        document.createElement("div");

    card.className =
        "live-card-item";


    const image =
        document.createElement("div");

    image.className =
        "live-card-image";


    image.style.backgroundImage =
        `url("${getImage(item.image)}")`;


    const overlay =
        document.createElement("div");

    overlay.className =
        "live-card-overlay";


    const content =
        document.createElement("div");

    content.className =
        "live-card-content";


    content.innerHTML = `

        <span class="live-badge">
            LIVE
        </span>

        <h3>
            ${item.title}
        </h3>

        <p>
            ${item.viewers}
            watching •
            ${item.type}
        </p>

    `;


    card.appendChild(image);
    card.appendChild(overlay);
    card.appendChild(content);


    card.addEventListener(
        "click",
        function () {

            window.location.href =
                "../member3-live/live.html";

        }
    );


    return card;

}


/* =========================================================
   LIVE RENDER
========================================================= */

function renderLive() {

    if (!liveGrid) return;

    liveGrid.innerHTML = "";


    liveData.forEach(
        function (item) {

            liveGrid.appendChild(
                createLiveCard(item)
            );

        }
    );

}


/* =========================================================
   FILTER DROPDOWN
========================================================= */

function toggleFilter(menuId) {

    const menu =
        document.getElementById(menuId);

    if (!menu) return;


    const dropdown =
        menu.parentElement;


    const button =
        dropdown.querySelector(
            ".filter-tab"
        );


    const isOpen =
        menu.classList.contains("show");


    document
        .querySelectorAll(".filter-menu")
        .forEach(function (item) {

            item.classList.remove("show");

        });


    document
        .querySelectorAll(".filter-tab")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    if (!isOpen) {

        menu.classList.add("show");

        if (button) {

            button.classList.add("active");

        }

    }

}


/* =========================================================
   SELECT FILTER
========================================================= */

function selectFilter(
    type,
    value,
    button
) {

    selectedFilters[type] =
        value;


    const menu =
        button.parentElement;


    menu
        .querySelectorAll("button")
        .forEach(function (btn) {

            btn.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );


    const tab =
        menu.parentElement
            .querySelector(
                ".filter-tab"
            );


    let displayValue =
        value;


    if (type === "time") {

        if (value === "15") {

            displayValue =
                "15 min";

        }

        else if (value === "45") {

            displayValue =
                "45 min";

        }

        else if (value === "60") {

            displayValue =
                "1 hr";

        }

        else if (value === "120") {

            displayValue =
                "2hr+";

        }

    }


    if (tab) {

        tab.innerHTML = `

            <span class="filter-name">
                ${displayValue}
            </span>

            <span class="filter-arrow">
                ⌄
            </span>

        `;

        tab.classList.remove(
            "active"
        );

    }


    menu.classList.remove(
        "show"
    );

}


/* =========================================================
   APPLY FILTERS
========================================================= */

function applyFilters() {

    const filtered =
        streamData.filter(
            function (item) {


                /* CATEGORY */

                if (
                    selectedFilters.category !== "All" &&
                    item.category !==
                    selectedFilters.category
                ) {

                    return false;

                }


                /* GENRE */

                if (
                    selectedFilters.genre &&
                    item.genre !==
                    selectedFilters.genre
                ) {

                    return false;

                }


                /* TIME */

                if (
                    selectedFilters.time
                ) {

                    const selectedTime =
                        Number(
                            selectedFilters.time
                        );


                    if (
                        selectedTime ===
                        120
                    ) {

                        if (
                            item.time < 120
                        ) {

                            return false;

                        }

                    }

                    else {

                        if (
                            item.time !==
                            selectedTime
                        ) {

                            return false;

                        }

                    }

                }


                /* LANGUAGE */

                if (
                    selectedFilters.language &&
                    item.language !==
                    selectedFilters.language
                ) {

                    return false;

                }


                return true;

            }
        );


    renderTrending(
        filtered
    );


    showToast(
        filtered.length +
        " results found"
    );

}


/* =========================================================
   DISCOVER BUTTON
========================================================= */

const discoverButton =
    document.getElementById(
        "discoverButton"
    );


if (discoverButton) {

    discoverButton.addEventListener(
        "click",
        applyFilters
    );

}


/* =========================================================
   CLOSE FILTER DROPDOWNS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.closest(
                ".filter-dropdown"
            )
        ) {

            document
                .querySelectorAll(
                    ".filter-menu"
                )
                .forEach(
                    function (menu) {

                        menu.classList.remove(
                            "show"
                        );

                    }
                );


            document
                .querySelectorAll(
                    ".filter-tab"
                )
                .forEach(
                    function (button) {

                        button.classList.remove(
                            "active"
                        );

                    }
                );

        }

    }
);


/* =========================================================
   SEARCH
========================================================= */

const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchOverlay =
    document.getElementById(
        "searchOverlay"
    );

const closeSearch =
    document.getElementById(
        "closeSearch"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchResults =
    document.getElementById(
        "searchResults"
    );


if (
    searchButton &&
    searchOverlay
) {

    searchButton.addEventListener(
        "click",
        function () {

            searchOverlay.classList.add(
                "show"
            );


            setTimeout(
                function () {

                    if (searchInput) {

                        searchInput.focus();

                    }

                },
                100
            );

        }
    );

}


if (
    closeSearch &&
    searchOverlay
) {

    closeSearch.addEventListener(
        "click",
        function () {

            searchOverlay.classList.remove(
                "show"
            );


            if (searchInput) {

                searchInput.value = "";

            }


            if (searchResults) {

                searchResults.innerHTML =
                    "";

            }

        }
    );

}


if (searchOverlay) {

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                searchOverlay
            ) {

                searchOverlay.classList.remove(
                    "show"
                );

            }

        }
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!searchResults) {

                return;

            }


            searchResults.innerHTML =
                "";


            if (!query) {

                return;

            }


            const results =
                streamData.filter(
                    function (item) {

                        return (

                            item.title
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.category
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.genre
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.language
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );


            if (results.length === 0) {

                searchResults.innerHTML = `

                    <div class="search-result">
                        No results found
                    </div>

                `;

                return;

            }


            results
                .slice(0, 6)
                .forEach(
                    function (item) {

                        const result =
                            document.createElement(
                                "div"
                            );


                        result.className =
                            "search-result";


                        result.textContent =
                            item.title +
                            " • " +
                            item.category;


                        result.addEventListener(
                            "click",
                            function () {

                                showToast(
                                    item.title +
                                    " selected"
                                );


                                searchOverlay
                                    .classList.remove(
                                        "show"
                                    );

                            }
                        );


                        searchResults
                            .appendChild(
                                result
                            );

                    }
                );

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const navLinks =
    document.getElementById(
        "navLinks"
    );


if (
    mobileMenuButton &&
    navLinks
) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================================
   HERO WATCH BUTTON
========================================================= */

const watchNowButton =
    document.getElementById(
        "watchNowButton"
    );


if (watchNowButton) {

    watchNowButton.addEventListener(
        "click",
        function () {

            const discovery =
                document.querySelector(
                    ".discovery-section"
                );


            if (discovery) {

                discovery.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   MY LIST
========================================================= */

const myListButton =
    document.getElementById(
        "myListButton"
    );


if (myListButton) {

    myListButton.addEventListener(
        "click",
        function () {

            showToast(
                "Added to My List"
            );

        }
    );

}


/* =========================================================
   REFRESH TRENDING
========================================================= */

const refreshTrending =
    document.getElementById(
        "refreshTrending"
    );


if (refreshTrending) {

    refreshTrending.addEventListener(
        "click",
        function () {

            const shuffled =
                [...streamData].sort(
                    function () {

                        return (
                            Math.random() -
                            0.5
                        );

                    }
                );


            renderTrending(
                shuffled
            );


            showToast(
                "Trending refreshed"
            );

        }
    );

}


/* =========================================================
   WATCH TOGETHER - ROOM SYSTEM
========================================================= */

const roomModal =
    document.getElementById(
        "roomModal"
    );

const roomModalTitle =
    document.getElementById(
        "roomModalTitle"
    );

const roomModalText =
    document.getElementById(
        "roomModalText"
    );

const roomCodeInput =
    document.getElementById(
        "roomCodeInput"
    );

const confirmRoomButton =
    document.getElementById(
        "confirmRoomButton"
    );

const createRoomButton =
    document.getElementById(
        "createRoomButton"
    );

const joinRoomButton =
    document.getElementById(
        "joinRoomButton"
    );

const closeRoomModal =
    document.getElementById(
        "closeRoomModal"
    );


let roomMode = "join";


/* =========================================================
   GENERATE ROOM CODE
========================================================= */

function generateRoomCode() {

    const chars =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let code = "";


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        code +=
            chars.charAt(
                Math.floor(
                    Math.random() *
                    chars.length
                )
            );

    }


    return code;

}


/* =========================================================
   CREATE ROOM
========================================================= */

if (createRoomButton) {

    createRoomButton.addEventListener(
        "click",
        function () {

            roomMode =
                "create";


            const code =
                generateRoomCode();


            localStorage.setItem(
                "streamxRoomCode",
                code
            );


            if (roomModalTitle) {

                roomModalTitle.textContent =
                    "Your Watch Room";

            }


            if (roomModalText) {

                roomModalText.textContent =
                    "Share this room code with your friends.";

            }


            if (roomCodeInput) {

                roomCodeInput.value =
                    code;

                roomCodeInput.readOnly =
                    true;

            }


            if (confirmRoomButton) {

                confirmRoomButton.textContent =
                    "Room Created";

            }


            if (roomModal) {

                roomModal.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =========================================================
   JOIN ROOM
========================================================= */

if (joinRoomButton) {

    joinRoomButton.addEventListener(
        "click",
        function () {

            roomMode =
                "join";


            if (roomModalTitle) {

                roomModalTitle.textContent =
                    "Join Room";

            }


            if (roomModalText) {

                roomModalText.textContent =
                    "Enter the 6-character room code shared by your friend.";

            }


            if (roomCodeInput) {

                roomCodeInput.value =
                    "";

                roomCodeInput.placeholder =
                    "Enter 6-character code";

                roomCodeInput.readOnly =
                    false;

            }


            if (confirmRoomButton) {

                confirmRoomButton.textContent =
                    "Join Room";

            }


            if (roomModal) {

                roomModal.classList.add(
                    "show"
                );

            }


            setTimeout(
                function () {

                    if (roomCodeInput) {

                        roomCodeInput.focus();

                    }

                },
                100
            );

        }
    );

}


/* =========================================================
   CONFIRM ROOM
========================================================= */

if (confirmRoomButton) {

    confirmRoomButton.addEventListener(
        "click",
        function () {


            if (
                roomMode ===
                "create"
            ) {

                showToast(
                    "Room " +
                    roomCodeInput.value +
                    " created!"
                );

                return;

            }


            const code =
                roomCodeInput.value
                    .trim()
                    .toUpperCase();


            if (
                code.length !== 6
            ) {

                showToast(
                    "Enter a valid 6-character room code"
                );

                return;

            }


            localStorage.setItem(
                "streamxJoinedRoom",
                code
            );


            if (roomModal) {

                roomModal.classList.remove(
                    "show"
                );

            }


            showToast(
                "Joined room " +
                code
            );

        }
    );

}


/* =========================================================
   CLOSE ROOM
========================================================= */

if (closeRoomModal) {

    closeRoomModal.addEventListener(
        "click",
        function () {

            if (roomModal) {

                roomModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


if (roomModal) {

    roomModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                roomModal
            ) {

                roomModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================================================
   INITIAL LOAD
========================================================= */

renderTrending(
    [...streamData].sort(
        function (a, b) {

            return b.rating - a.rating;

        }
    )
);


renderLive();