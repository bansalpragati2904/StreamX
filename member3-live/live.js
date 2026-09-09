const streams = [
    {
        title: "Triggered Insaan Gaming Live",
        creator: "Triggered Insaan",
        category: "gaming",
        viewers: "18.5K",
        image:  "https://i.pinimg.com/originals/c1/f4/6e/c1f46e6df54a5c055e8f2b6f925a8795.jpg",
        video: "https://youtu.be/lVZFDXoxGDQ"
    },

    {
        title: "Techno Gamerz Live",
        creator: "Techno Gamerz",
        category: "gaming",
        viewers: "25.2K",
        image: "https://img.youtube.com/vi/5hK3v1UGxwQ/maxresdefault.jpg",
        video: "https://youtu.be/4HAcN9QA9a8"
    },

    {
    title: "Raj Shamani Live Talk",
    creator: "Raj Shamani",
    category: "creators",
    viewers: "12.8K",
    image: "https://img.youtube.com/vi/3BgIqFB09Ec/maxresdefault.jpg",
    video: "https://youtu.be/3BgIqFB09Ec"
},

    {
    title: "Bigg Boss 20 Live",
    creator: "Bigg Boss",
    category: "entertainment",
    viewers: "35.8K",
    image: "https://media.housepulse.in/studio/season-featured/2026/06/1781587980168-bigg_boss_hindi_season_20/master.webp",
    video: "https://youtu.be/QbuRBmaL6vA"
    },

    {
    title: "Khatron Ke Khiladi 15",
    creator: "Khatron Ke Khiladi",
    category: "entertainment",
    viewers: "28.4K",
    image: "https://image.tmdb.org/t/p/original/mtbgrSF6FfqZrRrzFq3gj5rEEEs.jpg",
    video: "https://youtu.be/FTipVzDNd-Y"
    },

    {
    title: "The Great Indian Kapil Show",
    creator: "Netflix",
    category: "entertainment",
    viewers: "19.7K",
    image: "https://img.youtube.com/vi/TDiBe4Mu9jg/maxresdefault.jpg",
    video: "https://youtu.be/TDiBe4Mu9jg"
    },
    
    {
        title: "India Cricket Live",
        creator: "StreamX Sports",
        category: "sports",
        viewers: "42.6K",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
        video: "https://youtu.be/MAm0RLQpYas"
    },

    {
        title: "Football Live",
        creator: "StreamX Sports",
        category: "sports",
        viewers: "31.2K",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
        video: "https://youtu.be/ArIgp-FEp9s"
    },

    {
        title: "Breaking News Live",
        creator: "StreamX News",
        category: "news",
        viewers: "20.7K",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        video:  "https://youtu.be/07t8sIbDums"
    },

    {
        title: "Live Music Session",
        creator: "StreamX Music",
        category: "music",
        viewers: "15.8K",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        video: "https://youtu.be/2a5yvPAjV2A"
    },

    
];


/* =====================================================
   SHOW STREAMS
===================================================== */

const liveGrid = document.getElementById("liveGrid");

function displayStreams(category = "all") {

    liveGrid.innerHTML = "";

    let filteredStreams;

    if (category === "all") {

        filteredStreams = streams;

    } else {

        filteredStreams = streams.filter(
            stream => stream.category === category
        );

    }


    filteredStreams.forEach(stream => {

        const card = document.createElement("div");

        card.className = "live-card";


        card.innerHTML = `

            <div class="thumbnail">

                <img
                    src="${stream.image}"
                    alt="${stream.title}"
                >

                <span class="live-badge">
                    LIVE
                </span>

                <span class="viewers">
                    👁 ${stream.viewers}
                </span>

            </div>


            <div class="card-info">

                <h3>
                    ${stream.title}
                </h3>

                <p class="creator">
                    ${stream.creator}
                </p>

                <span class="card-category">
                    ${stream.category.toUpperCase()}
                </span>

            </div>

        `;


        /* CARD CLICK */

        card.addEventListener("click", function () {

            const url =
                "player.html?title=" +
                encodeURIComponent(stream.title) +

                "&creator=" +
                encodeURIComponent(stream.creator) +

                "&video=" +
                encodeURIComponent(stream.video);


            window.location.href = url;

        });


        liveGrid.appendChild(card);

    });

}



/* =====================================================
   CATEGORY BUTTONS
===================================================== */

const categoryButtons =
    document.querySelectorAll(".category");


categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        const category =
            this.getAttribute("data-category");


        displayStreams(category);

    });

});



/* =====================================================
   SEARCH POPUP
===================================================== */

const searchButton =
    document.getElementById("searchButton");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");

const closeSearch =
    document.getElementById("closeSearch");

const searchResults =
    document.getElementById("searchResults");



/* =====================================================
   OPEN SEARCH
===================================================== */

searchButton.addEventListener("click", function () {

    searchOverlay.classList.add("show");

    searchInput.value = "";

    searchResults.innerHTML =
        "<p>Start typing to search.</p>";


    setTimeout(function () {

        searchInput.focus();

    }, 100);

});



/* =====================================================
   SEARCH WHILE TYPING
===================================================== */

searchInput.addEventListener("input", function () {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    /* EMPTY SEARCH */

    if (query === "") {

        searchResults.innerHTML =
            "<p>Start typing to search.</p>";

        return;

    }


    /* FIND RESULTS */

    const results =
        streams.filter(function (stream) {

            return (

                stream.title
                    .toLowerCase()
                    .includes(query)

                ||

                stream.creator
                    .toLowerCase()
                    .includes(query)

                ||

                stream.category
                    .toLowerCase()
                    .includes(query)

            );

        });


    /* NO RESULT */

    if (results.length === 0) {

        searchResults.innerHTML =
            "<p>No results found.</p>";

        return;

    }


    /* SHOW RESULTS */

    searchResults.innerHTML = "";


    results.forEach(function (stream) {

        const result =
            document.createElement("div");


        result.className =
            "search-result-item";


        result.innerHTML = `

            <strong>
                ${stream.title}
            </strong>

            <br>

            <span>
                ${stream.creator}
                •
                ${stream.category}
            </span>

        `;


        /* RESULT CLICK */

        result.addEventListener(
            "click",
            function () {

                const url =
                    "player.html?title=" +
                    encodeURIComponent(stream.title) +

                    "&creator=" +
                    encodeURIComponent(stream.creator) +

                    "&video=" +
                    encodeURIComponent(stream.video);


                window.location.href = url;

            }
        );


        searchResults.appendChild(result);

    });

});



/* =====================================================
   CLOSE SEARCH
===================================================== */

closeSearch.addEventListener("click", function () {

    searchOverlay.classList.remove("show");

    searchInput.value = "";

    searchResults.innerHTML =
        "<p>Start typing to search.</p>";

});



/* =====================================================
   CLICK OUTSIDE TO CLOSE
===================================================== */

searchOverlay.addEventListener("click", function (event) {

    if (event.target === searchOverlay) {

        searchOverlay.classList.remove("show");

    }

});



/* =====================================================
   ESC KEY TO CLOSE
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("show");

    }

});





/* =====================================================
   START
===================================================== */

displayStreams();