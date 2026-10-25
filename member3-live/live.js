


// ==========================================
// STREAMX - ALL VIDEO DATA
// ==========================================

// live: true = manually marked active livestream
// live: false = recorded or featured video

const streams = [
    {
        title: "Shahid Kapoor Unfiltered On Life, Marriage, Parenting, Movies, Acting & Failures | FO307 Raj Shamani",
        creator: "Raj Shamani",
        category: "creators",
        image: "https://img.youtube.com/vi/3BgIqFB09Ec/hqdefault.jpg",
        video: "https://youtu.be/3BgIqFB09Ec",
        live: false
    },
    {
        title: "GTA 6 Races with OG Gang🛑",
        creator: "Live Insaan",
        category: "creators",
        image: "https://img.youtube.com/vi/opz6be3J6a4/hqdefault.jpg",
        video: "https://youtu.be/opz6be3J6a4",
        live: false
    },
    {
        title: "Bhoot Catching Experts in Phasmophobia Live🛑",
        creator: "Live Insaan",
        category: "creators",
        image: "https://img.youtube.com/vi/mISrOxJg5Bw/hqdefault.jpg",
        video: "https://youtu.be/mISrOxJg5Bw",
        live: false
    },
    {
        title: "First IRL Stream with the Gang🛑 - Chilling QNA Games",
        creator: "Live Insaan",
        category: "creators",
        image: "https://img.youtube.com/vi/PFZy94DxJ_8/hqdefault.jpg",
        video: "https://youtu.be/PFZy94DxJ_8",
        live: false
    },
    {
        title: "Aaj Machegi Tabahi Bhookamp Tsunami Bawandar",
        creator: "Live Insaan",
        category: "gaming",
        image: "https://img.youtube.com/vi/lVZFDXoxGDQ/hqdefault.jpg",
        video: "https://youtu.be/lVZFDXoxGDQ",
        live: false
    },
    {
        title: "I BUILD A SMALL SHELTER IN THE JUNGLE | GREEN HELL GAMEPLAY #3",
        creator: "Techno Gamerz",
        category: "gaming",
        image: "https://img.youtube.com/vi/4HAcN9QA9a8/hqdefault.jpg",
        video: "https://youtu.be/4HAcN9QA9a8",
        live: false
    },
    {
        title: "Bigg Boss",
        creator: "Bigg Boss",
        category: "entertainment",
        image: "https://img.youtube.com/vi/QbuRBmaL6vA/hqdefault.jpg",
        video: "https://youtu.be/QbuRBmaL6vA",
        live: false
    },
    {
        title: "Khatron Ke Khiladi",
        creator: "Khatron Ke Khiladi",
        category: "entertainment",
        image: "https://image.tmdb.org/t/p/original/mtbgrSF6FfqZrRrzFq3gj5rEEEs.jpg",
        video: "https://youtu.be/FTipVzDNd-Y",
        live: false
    },
    {
        title: "Sonam Bajwa, Gippy Grewal, Kavita Kaushik | The Kapil Sharma Show",
        creator: "Netflix",
        category: "entertainment",
        image: "https://img.youtube.com/vi/LWdxm1Sl5vw/hqdefault.jpg",
        video: "https://youtu.be/LWdxm1Sl5vw",
        live: false
    },
    {
        title: "India Cricket",
        creator: "StreamX Sports",
        category: "sports",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
        video: "https://youtu.be/MAm0RLQpYas",
        live: false
    },
    {
        title: "Football Highlights",
        creator: "StreamX Sports",
        category: "sports",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
        video: "https://youtu.be/ArIgp-FEp9s",
        live: false
    },
    {
        title: "Badminton Semi-Finals: Lee Chong Wei vs Lin Dan",
        creator: "Badminton Sports",
        category: "sports",
        image: "https://img.youtube.com/vi/Hf-n1yfd8II/hqdefault.jpg",
        video: "https://youtu.be/Hf-n1yfd8II",
        live: false
    },
    {
        title: "India vs Uganda - Common Wealth Kabaddi Match",
        creator: "Kabaddi Sports",
        category: "sports",
        image: "https://img.youtube.com/vi/MD1UmOlzS1Y/hqdefault.jpg",
        video: "https://youtu.be/MD1UmOlzS1Y",
        live: false
    },
    {
        title: "Australia vs India Basketball Match",
        creator: "Basketball Sports",
        category: "sports",
        image: "https://img.youtube.com/vi/-tkE2lJoR58/hqdefault.jpg",
        video: "https://youtu.be/-tkE2lJoR58",
        live: false
    },
    {
        title: "News Coverage",
        creator: "StreamX News",
        category: "news",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        video: "https://youtu.be/07t8sIbDums",
        live: false
    },
    {
        title: "Music Session",
        creator: "StreamX Music",
        category: "music",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        video: "https://youtu.be/2a5yvPAjV2A",
        live: false
    },
    {
        title: "INCOGNITO - FULL STUDIO",
        creator: "LITTLE BIG BEAT STUDIOS",
        category: "music",
        image: "https://img.youtube.com/vi/KOQIQfZhQC8/hqdefault.jpg",
        video: "https://youtu.be/KOQIQfZhQC8",
        live: false
    },
    {
        title: "IIFA Awards Show",
        creator: "IIFA",
        category: "entertainment",
        image: "https://img.youtube.com/vi/0VNGgTid2qw/hqdefault.jpg",
        video: "https://youtu.be/0VNGgTid2qw",
        live: false
    },
    {
        title: "EASIEST DECISION OF MY LIFE | NO PROMOTIONS",
        creator: "CarryisLive",
        category: "creators",
        image: "https://img.youtube.com/vi/KZJwLnC2LEY/hqdefault.jpg",
        video: "https://youtu.be/KZJwLnC2LEY",
        live: false
    }
];


// ==========================================
// POPULAR CREATORS DATA
// ==========================================

const creators = [
    "Live Insaan",
    "Techno Gamerz",
    "Raj Shamani",
    "CarryisLive"
];


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function createText(tag, value, className = "") {

    const element = document.createElement(tag);

    element.textContent = value;

    if (className !== "") {
        element.className = className;
    }

    return element;
}

function sameCreator(name1, name2) {

    return name1.trim().toLowerCase() ===
           name2.trim().toLowerCase();
}


// ==========================================
// OPEN VIDEO IN PLAYER.HTML
// ==========================================

function openStream(stream) {

    if (!stream.video) {
        alert("Video link available nahi hai.");
        return;
    }

    const params = new URLSearchParams({
        title: stream.title,
        creator: stream.creator,
        video: stream.video
    });

    window.location.href = "player.html?" + params.toString();
}


// ==========================================
// CREATE VIDEO CARD
// ==========================================

function createVideoCard(stream) {

    const card = document.createElement("div");
    card.className = "live-card";

    const thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";

    const image = document.createElement("img");

    image.src = stream.image;
    image.alt = stream.title;
    image.loading = "lazy";

    thumbnail.appendChild(image);

    const badge = createText(
    "span",
    "🔴 LIVE",
    "live-badge"
);

badge.classList.add("is-live");

    if (stream.live) {
        badge.classList.add("is-live");
    }

    thumbnail.appendChild(badge);

    const info = document.createElement("div");
    info.className = "card-info";

    info.appendChild(
        createText("h3", stream.title)
    );

    info.appendChild(
        createText("p", stream.creator)
    );

    info.appendChild(
        createText(
            "span",
            stream.category.toUpperCase(),
            "card-category"
        )
    );

    card.appendChild(thumbnail);
    card.appendChild(info);

    card.addEventListener("click", function() {
        openStream(stream);
    });

    return card;
}


// ==========================================
// RENDER VIDEO CARDS
// ==========================================

function renderVideos(videoList, containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Container not found:", containerId);
        return;
    }

    container.innerHTML = "";

    if (videoList.length === 0) {

        container.appendChild(
            createText("p", "No videos found.")
        );

        return;
    }

    videoList.forEach(function(stream) {

        const card = createVideoCard(stream);

        container.appendChild(card);

    });
}


// ==========================================
// WATCH LIVE - ONE VIDEO PER CREATOR
// ==========================================

function displayStreams(category = "all") {

    // Category filter
    const filtered = streams.filter(function(stream) {

        return category === "all" ||
               stream.category === category;

    });

    // Unique creator videos
    const uniqueVideos = [];
    const creatorNames = [];

    filtered.forEach(function(stream) {

        const creatorName = stream.creator.trim().toLowerCase();

        if (!creatorNames.includes(creatorName)) {

            creatorNames.push(creatorName);

            uniqueVideos.push(stream);

        } else {

            // Prefer an active live stream if one is marked
            const index = creatorNames.indexOf(creatorName);

            if (stream.live && !uniqueVideos[index].live) {
                uniqueVideos[index] = stream;
            }
        }

    });

    renderVideos(uniqueVideos, "liveGrid");
}


// ==========================================
// CATEGORY FILTER BUTTONS
// ==========================================

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category || "all";

        displayStreams(category);

    });

});


// ==========================================
// SHOW ALL VIDEOS OF SELECTED CREATOR
// ==========================================

function showCreatorVideos(creatorName) {

    const creatorVideos = streams.filter(function(stream) {

        return sameCreator(stream.creator, creatorName);

    });

    const section = document.getElementById(
        "creatorVideosSection"
    );

    const nameHeading = document.getElementById(
        "selectedCreatorName"
    );

    const countText = document.getElementById(
        "selectedCreatorCount"
    );

    if (!section || !nameHeading || !countText) {
        console.error("Creator section elements missing.");
        return;
    }

    nameHeading.textContent = creatorName + " - All Videos";

    countText.textContent =
        creatorVideos.length + " Videos Available";

    // Show all creator videos
    renderVideos(creatorVideos, "creatorVideosGrid");

    // Display section
    section.style.display = "block";

    // Highlight selected creator
    document.querySelectorAll(".creator-card").forEach(
        function(card) {

            card.classList.remove("selected");

            if (card.dataset.creator === creatorName) {
                card.classList.add("selected");
            }

        }
    );

    // Scroll to selected creator videos
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ==========================================
// POPULAR CREATORS CARDS
// ==========================================

const creatorGrid = document.getElementById("creatorGrid");

if (creatorGrid) {

    creatorGrid.innerHTML = "";

    creators.forEach(function(name) {

        const card = document.createElement("div");

        card.className = "creator-card";
        card.dataset.creator = name;

        const avatar = createText(
            "div",
            name.charAt(0).toUpperCase(),
            "creator-avatar"
        );

        card.appendChild(avatar);

        card.appendChild(
            createText("h3", name)
        );

        const creatorVideos = streams.filter(function(stream) {
            return sameCreator(stream.creator, name);
        });

        card.appendChild(
            createText(
                "p",
                creatorVideos.length + " Videos"
            )
        );

        card.appendChild(
            createText("p", "View All Videos →")
        );

        card.addEventListener("click", function() {

            showCreatorVideos(name);

        });

        creatorGrid.appendChild(card);

    });

}


// ==========================================
// CLOSE CREATOR VIDEOS
// ==========================================

const closeCreatorVideos = document.getElementById(
    "closeCreatorVideos"
);

if (closeCreatorVideos) {

    closeCreatorVideos.addEventListener("click", function() {

        const section = document.getElementById(
            "creatorVideosSection"
        );

        section.style.display = "none";

        document.querySelectorAll(".creator-card").forEach(
            function(card) {
                card.classList.remove("selected");
            }
        );

        document.getElementById("popularCreators").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ==========================================
// TRENDING / FEATURED VIDEOS
// ==========================================

const trendingGrid = document.getElementById("trendingGrid");

if (trendingGrid) {

    const trendingVideos = [
        streams[0],
        streams[4],
        streams[5]
    ];

    renderVideos(trendingVideos, "trendingGrid");

}


// ==========================================
// SEARCH POPUP
// ==========================================

const searchButton = document.getElementById("searchButton");

const searchOverlay = document.getElementById("searchOverlay");

const closeSearchButton = document.getElementById("closeSearch");

const searchInput = document.getElementById("searchInput");

const searchResults = document.getElementById("searchResults");

if (
    searchButton &&
    searchOverlay &&
    closeSearchButton &&
    searchInput &&
    searchResults
) {

    searchButton.addEventListener("click", function() {

        searchOverlay.classList.add("show");

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResults.appendChild(
            createText("p", "Start typing to search.")
        );

        searchInput.focus();

    });


    function closeSearchPopup() {

        searchOverlay.classList.remove("show");

    }


    closeSearchButton.addEventListener(
        "click",
        closeSearchPopup
    );


    searchOverlay.addEventListener("click", function(event) {

        if (event.target === searchOverlay) {
            closeSearchPopup();
        }

    });


    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape") {
            closeSearchPopup();
        }

    });


    searchInput.addEventListener("input", function() {

        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (query === "") {

            searchResults.appendChild(
                createText("p", "Start typing to search.")
            );

            return;
        }

        const results = streams.filter(function(stream) {

            return (
                stream.title.toLowerCase().includes(query) ||
                stream.creator.toLowerCase().includes(query) ||
                stream.category.toLowerCase().includes(query)
            );

        });

        if (results.length === 0) {

            searchResults.appendChild(
                createText("p", "No results found.")
            );

            return;
        }

        results.forEach(function(stream) {

            const item = document.createElement("div");

            item.className = "search-result-item";

            item.appendChild(
                createText("strong", stream.title)
            );

            item.appendChild(
                createText(
                    "p",
                    stream.creator + " • " + stream.category
                )
            );

            item.addEventListener("click", function() {

                openStream(stream);

            });

            searchResults.appendChild(item);

        });

    });

}


// ==========================================
// UPCOMING EVENTS - NOTIFY ME DEMO
// ==========================================

const notifyButtons = document.querySelectorAll(".notify-btn");

notifyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("saved");

        const message = document.getElementById(
            "reminderMessage"
        );

        if (button.classList.contains("saved")) {

            button.textContent = "✓ Selected";

            if (message) {
                message.textContent =
                    "Demo selection only. No notification will be sent.";
            }

        } else {

            button.textContent = "Notify Me";

            if (message) {
                message.textContent = "";
            }

        }

    });

});



// ==========================================
// COUNTDOWN FOR ALL UPCOMING EVENTS
// ==========================================

function startCountdown(elementId, eventDate) {

    const countdown = document.getElementById(elementId);

    if (!countdown) {
        return;
    }

    const targetDate = new Date(eventDate);

    function updateCountdown() {

        const now = new Date();

        const difference = targetDate - now;

        if (difference <= 0) {
            countdown.textContent = "Event time reached!";
            return;
        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        countdown.textContent =
            days + "d : " +
            hours + "h : " +
            minutes + "m : " +
            seconds + "s";
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);
}


// KABADDI COUNTDOWN
startCountdown(
    "kabaddiCountdown",
    "2026-10-30T19:00:00+05:30"
);

// GAMING COUNTDOWN
startCountdown(
    "gamingCountdown",
    "2026-11-05T18:00:00+05:30"
);

// MUSIC COUNTDOWN
startCountdown(
    "musicCountdown",
    "2026-11-10T20:00:00+05:30"
);



// ==========================================
// INITIAL DISPLAY
// ==========================================

displayStreams("all");
