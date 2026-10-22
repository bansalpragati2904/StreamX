/* =========================================================
   STREAMX - MOVIES AND SERIES
   Search, Genre, Year, Rating, Sorting and Trailer Modal
   ========================================================= */

const mediaData = [

    // ================= MOVIES =================

    {
        id: "m1",
        type: "movie",
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        thumbnail: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg"
    },
    {
        id: "m2",
        type: "movie",
        title: "SherShaah",
        genre: "Action",
        year: 2021,
        rating: 8.3,
        trailerUrl: "https://www.youtube.com/embed/V0EQJzfgXvY",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
         cast: [
    "Sidharth Malhotra",
    "Kiara Advani"
],

    },
    {
        id: "m3",
        type: "movie",
        title: "Home Alone",
        genre: "Drama",
        year: 1990,
        rating: 7.7,
        trailerUrl: "https://www.youtube.com/embed/dzdpqRGA1qc",
        thumbnail: "https://image.tmdb.org/t/p/original/r2kJFsLB4znZmAzreiMg1Bpv0cz.jpg"
    },
    {
        id: "m4",
        type: "movie",
        title: "Avengers: The Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
        thumbnail: "https://images.wallpapersden.com/image/download/avengers-endgame-2019-movie_64330_1940x2320.jpg"
    },
    {
        id: "m5",
        type: "movie",
        title: "Drishyam 2",
        genre: "Thriller",
        year: 2022,
        rating: 8.2,
        trailerUrl: "https://www.youtube.com/embed/tOdJlNKquls",
        thumbnail: "https://assetscdn1.paytm.com/images/cinema/Drishyam-min-f607e2e0-4d39-11ed-a279-f56421cde6f2.jpg?format=webp",
        cast: [
    "Ajay Devgn",
    "Tabu",
    "Akshaye Khanna",
    "Shriya Saran",
    "Ishita Dutta",
    "Rajat Kapoor"
],
leadActor: "Ajay Devgn",
leadActress: "Tabu"
    },
    {
        id: "m6",
        type: "movie",
        title: "The Dark Knight",
        genre: "Thriller",
        year: 2008,
        rating: 9.0,
        trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
        thumbnail: "https://media.themoviedb.org/t/p/w440_and_h660_face/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg"
    },
    {
        id: "m7",
        type: "movie",
        title: "Ra-One",
        genre: "Sci-Fi",
        year: 2011,
        rating: 4.7,
        trailerUrl: "https://www.youtube.com/embed/o8sXsbI2dXE",
        thumbnail: "https://images.static-bluray.com/products/20/9053_3_front.jpg"
    },
    {
        id: "m8",
        type: "movie",
        title: "Mad Max: Fury Road",
        genre: "Action",
        year: 2015,
        rating: 8.1,
        trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
        thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3585170042969.5b96d5b6bab8d.jpg"
    },
    {
        id: "m9",
        type: "movie",
        title: "URI",
        genre: "Action",
        year: 2019,
        rating: 8.2,
        trailerUrl: "https://www.youtube.com/embed/6SSbCbudN3o",
        thumbnail: "https://tse1.mm.bing.net/th/id/OIP.0YiAUUdX_dDaxGQhwsYnoAHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "m10",
        type: "movie",
        title: "Kick",
        genre: "Drama",
        year: 2014,
        rating: 5.3,
        trailerUrl: "https://www.youtube.com/embed/u-j1nx_HY5o",
        thumbnail: "https://static.moviecrow.com/gallery/20140701/38031-fl1-001.jpg"
    },
    {
        id: "m11",
        type: "movie",
        title: "SpiderMan",
        genre: "Adventure",
        year: 2002,
        rating: 7.4,
        trailerUrl: "https://www.youtube.com/embed/8wNgphPi5VM",
        thumbnail: "https://tse2.mm.bing.net/th/id/OIP.ztjFBG7xvkj3aYUQrS4zzAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "m12",
        type: "movie",
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
        thumbnail: "https://tse2.mm.bing.net/th/id/OIP.vnJImFIy1GEoBBAjyZ-tfQHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },

    // ================= SERIES =================

    {
        id: "s1",
        type: "series",
        title: "Stranger Things",
        genre: "Mystery",
        year: 2016,
        rating: 8.7,
        trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
        thumbnail: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/06/03112487_poster_w780.jpg"
    },
    {
        id: "s2",
        type: "series",
        title: "Peaky Blinders",
        genre: "Crime",
        year: 2013,
        rating: 8.7,
        trailerUrl: "https://www.youtube.com/embed/oVzVdvGIC7U",
        thumbnail: "https://artworks.thetvdb.com/banners/v4/series/270915/posters/64b454ab22442.jpg"
    },
    {
        id: "s3",
        type: "series",
        title: "The Crown",
        genre: "Drama",
        year: 2016,
        rating: 8.6,
        trailerUrl: "https://www.youtube.com/embed/JWtnJjn6ng0",
        thumbnail: "https://www.themoviedb.org/t/p/original/xoRYlOQMCooz3jcwdtt348qB9oj.jpg"
    },
    {
        id: "s4",
        type: "series",
        title: "Sherlock",
        genre: "Crime",
        year: 2010,
        rating: 9.1,
        trailerUrl: "https://www.youtube.com/embed/4Vq4s8n8vxw",
        thumbnail: "https://i.pinimg.com/originals/d2/04/24/d204240200856ccb56f0ade18b19158d.jpg"
    },
    {
        id: "s5",
        type: "series",
        title: "Panchayat",
        genre: "Drama",
        year: 2020,
        rating: 8.9,
        trailerUrl: "https://www.youtube.com/embed/mojZJ7oeD_g",
        thumbnail: "https://images.justwatch.com/poster/316699631/s718/season-4.jpg"
    },
    {
        id: "s6",
        type: "series",
        title: "Loki",
        genre: "Fantasy",
        year: 2021,
        rating: 8.2,
        trailerUrl: "https://www.youtube.com/embed/nW948Va-l10",
        thumbnail: "https://images.thedirect.com/media/photos/loki-tosa.jpg"
    },
    {
        id: "s7",
        type: "series",
        title: "Lost",
        genre: "Sci-Fi",
        year: 2004,
        rating: 8.3,
        trailerUrl: "https://www.youtube.com/embed/KTu8iDynwNc",
        thumbnail: "https://images.plex.tv/photo?size=large-1280&scale=1&url=https:%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FpoGAFZaSrl1Gf57neIEsbmFt2zb.jpg"
    },
    {
        id: "s8",
        type: "series",
        title: "Wednesday",
        genre: "Fantasy",
        year: 2022,
        rating: 8.0,
        trailerUrl: "https://www.youtube.com/embed/Di310WS8zLk",
        thumbnail: "https://image.tmdb.org/t/p/original/kKwy8QiXyQocbDj4haUG0uD1SbF.jpg",
        cast: [
        "Hunter Doohan",
        "Jenna Ortega"
        ]
    },
    {
        id: "s9",
        type: "series",
        title: "The Last of Us",
        genre: "Mystery",
        year: 2023,
        rating: 8.7,
        trailerUrl: "https://www.youtube.com/embed/uLtkt8BonwM",
        thumbnail: "https://tse1.mm.bing.net/th/id/OIP.CgVy6fDvOGTCGNsuhu2bNwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
         cast: [
    "Pedro Pascal",
    "Bella Ramsey"
],

    },
    {
        id: "s10",
        type: "series",
        title: "House of the Dragon",
        genre: "Fantasy",
        year: 2022,
        rating: 8.4,
        trailerUrl: "https://www.youtube.com/embed/DotnJ7tTA34",
        thumbnail: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2025/06/03165325_poster_w780-1.jpg"
    },
    {
        id: "s11",
        type: "series",
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Drama",
        year: 2001,
        rating: 7.6,
        trailerUrl: "https://www.youtube.com/embed/l91Km49W9qI",
        thumbnail: "https://image.tmdb.org/t/p/original/7OKkzHV4ouyRggS8gEX7N9WwS66.jpg"
    },
    {
        id: "s12",
        type: "series",
        title: "The 100",
        genre: "Sci-Fi",
        year: 2014,
        rating: 7.6,
        trailerUrl: "https://www.youtube.com/embed/aDrsItJ_HU4",
        thumbnail: "https://www.themoviedb.org/t/p/original/85mbrmA5M810qu2NNyM7nSzshGi.jpg"
    }
];


/* =========================================================
   PAGE FUNCTIONALITY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const movieGrid = document.getElementById("movieGrid");
    const seriesGrid = document.getElementById("seriesGrid");

    const searchInput = document.getElementById("searchInput");
    const searchInputMain = document.getElementById("searchInputMain");
    const searchToggle = document.getElementById("searchToggle");

    const genreFilter = document.getElementById("genreFilter");
    const yearFilter = document.getElementById("yearFilter");
    const ratingFilter = document.getElementById("ratingFilter");
    const sortFilter = document.getElementById("sortFilter");

    const resultCount = document.getElementById("resultCount");

    const trendingGrid = document.getElementById("trendingGrid");
    const topRatedGrid = document.getElementById("topRatedGrid");
    const recommendGrid = document.getElementById("recommendGrid");
    const recommendGenre = document.getElementById("recommendGenre");

    const videoModal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeModalBtn = document.getElementById("closeModal");
    const detailsModal = document.getElementById("detailsModal");
    const detailsBody = document.getElementById("detailsBody");
    const closeDetailsBtn = document.getElementById("closeDetails");
    let activeDetailsItem = null;


    // Identify the current page

    const currentType = seriesGrid ? "series" : "movie";

    const mainGrid = currentType === "series"
        ? seriesGrid
        : movieGrid;

    const pageItems = mediaData.filter(function (item) {
        return item.type === currentType;
    });


    // Populate the Year dropdown

    if (yearFilter) {

        const years = [];

        pageItems.forEach(function (item) {

            if (!years.includes(item.year)) {
                years.push(item.year);
            }

        });

        years.sort(function (a, b) {
            return b - a;
        });

        years.forEach(function (year) {

            const option = document.createElement("option");

            option.value = year;
            option.textContent = year;

            yearFilter.appendChild(option);

        });
    }


    // Create a media card

    function createCard(item) {

        const card = document.createElement("div");

        card.className = "media-card";

        card.innerHTML = `
            <div class="thumbnail"
                 style="background-image: url('${item.thumbnail}')">

                <div class="play-circle">▶</div>

                <span class="thumb-title">${item.title}</span>

            </div>

            <div class="card-content">

                <h3>${item.title}</h3>

                <p class="card-meta">
                    ${item.year} · ${item.genre}
                </p>

                <p class="card-rating">
                    ⭐ ${item.rating}
                </p>

                <div class="card-actions">
                    <button class="primary-button watch-btn">
                        ▶ Watch Trailer
                    </button>
                </div>

            </div>
        `;

        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View details for ${item.title}`);
        card.addEventListener("click", function () {
            openDetails(item);
        });
        card.addEventListener("keydown", function (event) {
            if (event.target === card && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                openDetails(item);
            }
        });
        const trailerButton = card.querySelector(".watch-btn");
        if (trailerButton) {
            trailerButton.addEventListener("click", function (event) {
                event.stopPropagation();
                openTrailer(item.trailerUrl);
            });
        }

        return card;
    }


    // Display cards inside a grid

    function displayCards(container, items, message) {

        if (!container) {
            return;
        }

        container.innerHTML = "";

        if (items.length === 0) {

            container.innerHTML = `
                <p class="no-results">
                    ${message || "No results found."}
                </p>
            `;

            return;
        }

        items.forEach(function (item) {
            container.appendChild(createCard(item));
        });
    }


    // Get the current search text

    function getSearchText() {

        if (searchInputMain && searchInputMain.value.trim() !== "") {
            return searchInputMain.value.trim().toLowerCase();
        }

        if (searchInput) {
            return searchInput.value.trim().toLowerCase();
        }

        return "";
    }


    // Search, filter and sort the main grid

    function getFilteredItems() {

        let items = pageItems.slice();

        const searchText = getSearchText();

        const selectedGenre = genreFilter
            ? genreFilter.value
            : "All";

        const selectedYear = yearFilter
            ? yearFilter.value
            : "All";

        const minimumRating = ratingFilter
            ? Number(ratingFilter.value)
            : 0;

        const sortValue = sortFilter
            ? sortFilter.value
            : "default";


        // Search by title or genre

        if (searchText !== "") {

            items = items.filter(function (item) {

                return (
                    item.title.toLowerCase().includes(searchText) ||
                    item.genre.toLowerCase().includes(searchText)
                );

            });
        }


        // Filter by genre

        if (selectedGenre !== "All") {

            items = items.filter(function (item) {
                return item.genre === selectedGenre;
            });
        }


        // Filter by year

        if (selectedYear !== "All") {

            items = items.filter(function (item) {
                return item.year === Number(selectedYear);
            });
        }


        // Filter by minimum rating

        items = items.filter(function (item) {
            return item.rating >= minimumRating;
        });


        // SORT THE RESULTS

        if (sortValue === "rating") {

            // Highest rating first

            items.sort(function (a, b) {
                return b.rating - a.rating;
            });

        } else if (sortValue === "newest") {

            // Newest release first

            items.sort(function (a, b) {
                return b.year - a.year;
            });

        } else if (sortValue === "alphabetical") {

            // A to Z

            items.sort(function (a, b) {
                return a.title.localeCompare(b.title);
            });

        }

        return items;
    }


    // Update the main grid

    function updateMainGrid() {

        const filteredItems = getFilteredItems();

        displayCards(
            mainGrid,
            filteredItems,
            "No movies or series match your filters."
        );

        if (resultCount) {
            resultCount.textContent = filteredItems.length + " results";
        }
    }


    // Update trending, top-rated and recommended sections

    function updateExtraSections() {

        const searchText = getSearchText();

        const selectedGenre = genreFilter
            ? genreFilter.value
            : "All";

        const selectedYear = yearFilter
            ? yearFilter.value
            : "All";

        const minimumRating = ratingFilter
            ? Number(ratingFilter.value)
            : 0;


        // Apply current filters

        let filtered = pageItems.filter(function (item) {

            const matchesSearch =
                item.title.toLowerCase().includes(searchText) ||
                item.genre.toLowerCase().includes(searchText);

            const matchesGenre =
                selectedGenre === "All" ||
                item.genre === selectedGenre;

            const matchesYear =
                selectedYear === "All" ||
                item.year === Number(selectedYear);

            const matchesRating =
                item.rating >= minimumRating;

            return (
                matchesSearch &&
                matchesGenre &&
                matchesYear &&
                matchesRating
            );
        });


        // Trending: newest titles

        const trending = filtered
            .slice()
            .sort(function (a, b) {
                return b.year - a.year;
            })
            .slice(0, 4);

        displayCards(
            trendingGrid,
            trending,
            "No matching titles found."
        );


        // Top Rated: highest-rated titles

        const topRated = filtered
            .slice()
            .sort(function (a, b) {
                return b.rating - a.rating;
            })
            .slice(0, 4);

        displayCards(
            topRatedGrid,
            topRated,
            "No matching titles found."
        );


        // Recommendations

        if (recommendGrid) {

            const preferredGenre = recommendGenre
                ? recommendGenre.value
                : "All";

            let recommendations = pageItems.filter(function (item) {

                return (
                    preferredGenre === "All" ||
                    item.genre === preferredGenre
                );

            });

            recommendations.sort(function (a, b) {
                return b.rating - a.rating;
            });

            displayCards(
                recommendGrid,
                recommendations.slice(0, 4),
                "No recommendations found for this genre."
            );
        }
    }


    // Update the page

    function updatePage() {
        updateMainGrid();
        updateExtraSections();
    }


    // Detailed title view, related recommendations and saved watchlist

    function getWatchlist() {
        try {
            return JSON.parse(localStorage.getItem("streamx-watchlist") || "[]");
        } catch (error) {
            return [];
        }
    }

    function openDetails(item) {
        if (!detailsModal || !detailsBody) return;
        activeDetailsItem = item;
        const synopsis = item.synopsis || `${item.title} is a ${item.genre.toLowerCase()} ${item.type} released in ${item.year}. Open the trailer to learn more.`;
        const cast = Array.isArray(item.cast) && item.cast.length
            ? item.cast.map(person => `<span class="cast-person">${person}</span>`).join("")
            : '<p class="details-empty">Cast information has not been added for this title yet.</p>';
        const related = mediaData.filter(candidate => candidate.type === item.type && candidate.id !== item.id && candidate.genre === item.genre).slice(0, 6);
        const relatedMarkup = related.length ? related.map(candidate => `
            <button class="related-card" type="button" data-related-id="${candidate.id}" aria-label="View ${candidate.title} details">
                <img src="${candidate.thumbnail}" alt="${candidate.title} poster" loading="lazy">
                <span>${candidate.title}</span><small>${candidate.year} · ★ ${candidate.rating}</small>
            </button>`).join("") : '<p class="details-empty">No similar titles are available yet.</p>';
        const saved = getWatchlist().includes(item.id);
        detailsBody.innerHTML = `
            <div class="details-content">
                <img class="details-poster" src="${item.thumbnail}" alt="${item.title} poster">
                <div class="details-info">
                    <p class="details-type">${item.type === "series" ? "SERIES" : "MOVIE"}</p>
                    <h2>${item.title}</h2>
                    <p class="details-meta">${item.year} · ${item.genre}</p>
                    <p class="details-rating">⭐ ${item.rating}/10</p>
                    <p class="details-synopsis">${synopsis}</p>
                    ${item.director ? `<p><strong>${item.type === "series" ? "Creator" : "Director"}:</strong> ${item.director}</p>` : ""}
                    <div class="details-actions">
                        <button class="primary-button" type="button" id="modalWatchTrailer">▶ Watch Trailer</button>
                        <button class="secondary-button" type="button" id="watchlistToggle">${saved ? "✓ Added to Watchlist" : "+ Add to Watchlist"}</button>
                    </div>
                </div>
            </div>
            <div class="details-tabs" role="tablist" aria-label="Title information">
                <button class="details-tab active" type="button" role="tab" aria-selected="true" data-tab="related">You might also like</button>
                <button class="details-tab" type="button" role="tab" aria-selected="false" data-tab="cast">Cast</button>
                <button class="details-tab" type="button" role="tab" aria-selected="false" data-tab="info">Details</button>
            </div>
            <div class="details-tab-content" id="detailsTabContent"><div class="related-grid">${relatedMarkup}</div></div>`;
        detailsModal.classList.add("show");
        document.body.classList.add("modal-open");
        detailsBody.querySelector("#modalWatchTrailer").addEventListener("click", () => openTrailer(item.trailerUrl));
        detailsBody.querySelector("#watchlistToggle").addEventListener("click", toggleWatchlist);
        detailsBody.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => showDetailsTab(button.dataset.tab, item, cast, relatedMarkup)));
        detailsBody.querySelectorAll("[data-related-id]").forEach(button => button.addEventListener("click", () => {
            const nextItem = mediaData.find(candidate => candidate.id === button.dataset.relatedId);
            if (nextItem) openDetails(nextItem);
        }));
    }

    function showDetailsTab(tab, item, cast, relatedMarkup) {
        const content = detailsBody.querySelector("#detailsTabContent");
        detailsBody.querySelectorAll("[data-tab]").forEach(button => {
            const active = button.dataset.tab === tab;
            button.classList.toggle("active", active);
            button.setAttribute("aria-selected", String(active));
        });
        if (tab === "cast") content.innerHTML = `<div class="cast-list">${cast}</div>`;
        else if (tab === "info") content.innerHTML = `<div class="full-details-list"><p><strong>Type:</strong> ${item.type === "series" ? "TV Series" : "Movie"}</p><p><strong>Release year:</strong> ${item.year}</p><p><strong>Genre:</strong> ${item.genre}</p><p><strong>Rating:</strong> ⭐ ${item.rating}/10</p>${item.runtime ? `<p><strong>Runtime:</strong> ${item.runtime}</p>` : ""}</div>`;
        else content.innerHTML = `<div class="related-grid">${relatedMarkup}</div>`;
        content.querySelectorAll("[data-related-id]").forEach(button => button.addEventListener("click", () => {
            const nextItem = mediaData.find(candidate => candidate.id === button.dataset.relatedId);
            if (nextItem) openDetails(nextItem);
        }));
    }

    function toggleWatchlist() {
        if (!activeDetailsItem) return;
        const watchlist = getWatchlist();
        const index = watchlist.indexOf(activeDetailsItem.id);
        if (index === -1) watchlist.push(activeDetailsItem.id);
        else watchlist.splice(index, 1);
        localStorage.setItem("streamx-watchlist", JSON.stringify(watchlist));
        const button = detailsBody.querySelector("#watchlistToggle");
        if (button) button.textContent = index === -1 ? "✓ Added to Watchlist" : "+ Add to Watchlist";
    }

    function closeDetails() {
        if (detailsModal) detailsModal.classList.remove("show");
        document.body.classList.remove("modal-open");
        activeDetailsItem = null;
    }

    // Open trailer modal

    function openTrailer(videoUrl) {

        if (!videoModal || !videoPlayer || !videoUrl) {
            return;
        }

        videoPlayer.src = videoUrl + "?autoplay=1&rel=0";

        videoModal.classList.add("show");
        document.body.classList.add("modal-open");
    }


    // Close trailer modal

    function closeTrailer() {

        if (!videoModal || !videoPlayer) {
            return;
        }

        videoModal.classList.remove("show");
        videoPlayer.src = "";
        document.body.classList.remove("modal-open");
    }


    // Navbar search button

    if (searchToggle) {

        searchToggle.addEventListener("click", function () {

            const targetSearch = searchInputMain || searchInput;

            if (targetSearch) {

                targetSearch.focus();

                targetSearch.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        });
    }


    // Search input

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            if (searchInputMain) {
                searchInputMain.value = searchInput.value;
            }

            updatePage();
        });
    }


    // Main search input

    if (searchInputMain) {

        searchInputMain.addEventListener("input", function () {

            if (searchInput) {
                searchInput.value = searchInputMain.value;
            }

            updatePage();
        });
    }


    // Genre filter

    if (genreFilter) {
        genreFilter.addEventListener("change", updatePage);
    }


    // Year filter

    if (yearFilter) {
        yearFilter.addEventListener("change", updatePage);
    }


    // Rating filter

    if (ratingFilter) {
        ratingFilter.addEventListener("change", updatePage);
    }


    // Sorting dropdown

    if (sortFilter) {
        sortFilter.addEventListener("change", updatePage);
    }


    // Recommendation genre

    if (recommendGenre) {
        recommendGenre.addEventListener("change", updateExtraSections);
    }


    // Details modal controls

    if (closeDetailsBtn) closeDetailsBtn.addEventListener("click", closeDetails);
    if (detailsModal) detailsModal.addEventListener("click", function (event) {
        if (event.target === detailsModal) closeDetails();
    });

    // Close button

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeTrailer);
    }


    // Close modal by clicking outside

    if (videoModal) {

        videoModal.addEventListener("click", function (event) {

            if (event.target === videoModal) {
                closeTrailer();
            }
        });
    }


    // Close modal with Escape

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            videoModal && videoModal.classList.contains("show")
        ) {
            closeTrailer();
        } else if (event.key === "Escape" && detailsModal && detailsModal.classList.contains("show")) {
            closeDetails();
        }
    });


    // Initial display

    updatePage();

});