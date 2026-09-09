/* =========================================================
   STREAMX - DYNAMIC MEDIA GENERATION & MODAL CONTROLS
   ========================================================= */

// Data Array for Movies & Series
const mediaData = [
  // MOVIES
  {
    id: "m1",
    type: "movie",
    title: "Interstellar",
    genre: "Sci-Fi",
    trailerUrl: "https://www.youtube.com/embed/HYVxnPmb15E",
    thumbnail: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg"
  },
  {
    id: "m2",
    type: "movie",
    title: "SherShaah",
    genre: "Action",
    trailerUrl: "https://www.youtube.com/embed/V0EQJzfgXvY",
    thumbnail: "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
  },
  {
    id: "m3",
    type: "movie",
    title: "Home Alone",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/dzdpqRGA1qc",
    thumbnail: "https://image.tmdb.org/t/p/original/r2kJFsLB4znZmAzreiMg1Bpv0cz.jpg"
  },
  {
    id: "m4",
    type: "movie",
    title: "Avengers : The Endgame",
    genre: "Thriller",
    trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
    thumbnail: "https://images.wallpapersden.com/image/download/avengers-endgame-2019-movie_64330_1940x2320.jpg"
  },
  {
    id: "m5",
    type: "movie",
    title: "Drishyam 2",
    genre: "Adventure",
    trailerUrl: "https://www.youtube.com/embed/tOdJlNKquls",
    thumbnail: "https://assetscdn1.paytm.com/images/cinema/Drishyam-min-f607e2e0-4d39-11ed-a279-f56421cde6f2.jpg?format=webp"
  },
  {
    id: "m6",
    type: "movie",
    title: "The Dark Knight",
    genre: "Thriller",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    thumbnail: "https://media.themoviedb.org/t/p/w440_and_h660_face/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg"
  },
  {
    id: "m7",
    type: "movie",
    title: "Ra-One",
    genre: "Sci-Fi",
    trailerUrl: "https://www.youtube.com/embed/o8sXsbI2dXE",
    thumbnail: "https://images.static-bluray.com/products/20/9053_3_front.jpg"
  },
  {
    id: "m8",
    type: "movie",
    title: "Mad Max: Fury Road",
    genre: "Action",
    trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8",
    thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3585170042969.5b96d5b6bab8d.jpg"
  },
  {
    id: "m9",
    type: "movie",
    title: "URI",
    genre: "Action",
    trailerUrl: "https://www.youtube.com/embed/6SSbCbudN3o",
    thumbnail: "https://e1.pxfuel.com/desktop-wallpaper/749/275/desktop-wallpaper-uri-movie-first-look-poster-uri-the-surgical-strike.jpg"
  },
  {
    id: "m10",
    type: "movie",
    title: "Kick",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/u-j1nx_HY5o",
    thumbnail: "https://static.moviecrow.com/gallery/20140701/38031-fl1-001.jpg"
  },
  {
    id: "m11",
    type: "movie",
    title: "SpiderMan",
    genre: "Adventure",
    trailerUrl: "https://www.youtube.com/embed/8wNgphPi5VM",
    thumbnail: "https://tse2.mm.bing.net/th/id/OIP.ztjFBG7xvkj3aYUQrS4zzAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: "m12",
    type: "movie",
    title: "Inception",
    genre: "Action",
    trailerUrl: "https://www.youtube.com/embed/Qwe6qXFTdgc",
    thumbnail: "https://tse2.mm.bing.net/th/id/OIP.vnJImFIy1GEoBBAjyZ-tfQHaK-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // SERIES
  {
    id: "s1",
    type: "series",
    title: "Stranger Things",
    genre: "Mystery",
    trailerUrl: "https://www.youtube.com/embed/ncn84cMWgRA",
    thumbnail: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/06/03112487_poster_w780.jpg"
  },
  {
    id: "s2",
    type: "series",
    title: "Peaky Blinders",
    genre: "Crime",
    trailerUrl: "https://www.youtube.com/embed/oVzVdvGIC7U",
    thumbnail: "https://artworks.thetvdb.com/banners/v4/series/270915/posters/64b454ab22442.jpg"
  },
  {
    id: "s3",
    type: "series",
    title: "The Crown",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/JWtnJjn6ng0",
    thumbnail: "https://www.themoviedb.org/t/p/original/xoRYlOQMCooz3jcwdtt348qB9oj.jpg"
  },
  {
    id: "s4",
    type: "series",
    title: "Sherlock",
    genre: "Crime",
    trailerUrl: "https://www.youtube.com/embed/4Vq4s8n8vxw",
    thumbnail: "https://i.pinimg.com/originals/d2/04/24/d204240200856ccb56f0ade18b19158d.jpg"
  },
  {
    id: "s5",
    type: "series",
    title: "Panchayat",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/mojZJ7oeD_g",
    thumbnail: "https://images.justwatch.com/poster/316699631/s718/season-4.jpg"
  },
  {
    id: "s6",
    type: "series",
    title: "Loki",
    genre: "Fantasy",
    trailerUrl: "https://www.youtube.com/embed/nW948Va-l10",
    thumbnail: "https://images.thedirect.com/media/photos/loki-tosa.jpg"
  },
  {
    id: "s7",
    type: "series",
    title: "Lost",
    genre: "Sci-Fi",
    trailerUrl: "https://www.youtube.com/embed/KTu8iDynwNc",
    thumbnail: "https://images.plex.tv/photo?size=large-1280&scale=1&url=https:%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FpoGAFZaSrl1Gf57neIEsbmFt2zb.jpg"
  },
  {
    id: "s8",
    type: "series",
    title: "Wednesday",
    genre: "Fantasy",
    trailerUrl: "https://www.youtube.com/embed/Di310WS8zLk",
    thumbnail: "https://image.tmdb.org/t/p/original/kKwy8QiXyQocbDj4haUG0uD1SbF.jpg"
  },
  {
    id: "s9",
    type: "series",
    title: "The Last of Us",
    genre: "Mystery",
    trailerUrl: "https://www.youtube.com/embed/uLtkt8BonwM",
    thumbnail: "https://tse1.mm.bing.net/th/id/OIP.CgVy6fDvOGTCGNsuhu2bNwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: "s10",
    type: "series",
    title: "House of the Dragon",
    genre: "Fantasy",
    trailerUrl: "https://www.youtube.com/embed/DotnJ7tTA34",
    thumbnail: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2025/06/03165325_poster_w780-1.jpg"
  },
  {
    id: "s11",
    type: "series",
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/l91Km49W9qI",
    thumbnail: "https://image.tmdb.org/t/p/original/7OKkzHV4ouyRggS8gEX7N9WwS66.jpg"
  },
  {
    id: "s12",
    type: "series",
    title: "The 100",
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/aDrsItJ_HU4",
    thumbnail: "https://www.themoviedb.org/t/p/original/85mbrmA5M810qu2NNyM7nSzshGi.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const movieGrid = document.getElementById("movieGrid");
  const seriesGrid = document.getElementById("seriesGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Video Modal Elements
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("videoPlayer");
  const closeModalBtn = document.getElementById("closeModal");

  // ---------------------------------------------------------
  // RENDER CARDS FUNCTION
  // ---------------------------------------------------------
  function renderCards(container, type, activeGenre = "All") {
    if (!container) return;

    const items = mediaData.filter((item) => {
      const matchType = item.type === type;
      const matchGenre =
        activeGenre === "All" ||
        item.genre.toLowerCase() === activeGenre.toLowerCase();

      return matchType && matchGenre;
    });

    container.innerHTML = "";

    if (items.length === 0) {
      container.innerHTML = `
        <p style="color: #74767b; grid-column: 1 / -1;">
          No ${type}s found for this genre.
        </p>`;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = `${type}-card`;

      card.innerHTML = `
        <div class="thumbnail" style="background-image: url('${item.thumbnail}');">
          <div class="play-circle">▶</div>
          <span class="thumb-title">${item.title}</span>
        </div>
        <div class="card-content">
          <h3>${item.title}</h3>
          <p class="meta">Genre: ${item.genre}</p>
          <button class="watch-btn">Watch Now</button>
        </div>
      `;

      // Open YouTube trailer when clicking anywhere on the card
      card.addEventListener("click", () => {
        openModal(item.trailerUrl);
      });

      container.appendChild(card);
    });
  }

  // ---------------------------------------------------------
  // INITIAL RENDER
  // ---------------------------------------------------------
  if (movieGrid) {
    renderCards(movieGrid, "movie");
  }

  if (seriesGrid) {
    renderCards(seriesGrid, "series");
  }

  // ---------------------------------------------------------
  // GENRE FILTERING
  // ---------------------------------------------------------
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const selectedGenre = button.textContent.trim();

      if (movieGrid) {
        renderCards(movieGrid, "movie", selectedGenre);
      }

      if (seriesGrid) {
        renderCards(seriesGrid, "series", selectedGenre);
      }
    });
  });

  // ---------------------------------------------------------
  // VIDEO MODAL LOGIC
  // ---------------------------------------------------------
  function openModal(videoSrc) {
    if (!videoModal || !modalVideo || !videoSrc) {
      return;
    }

    modalVideo.src = videoSrc + "?autoplay=1&rel=0";
    videoModal.classList.add("show");
  }

  function closeModal() {
    if (!videoModal || !modalVideo) {
      return;
    }

    videoModal.classList.remove("show");
    modalVideo.src = "";
  }

  // ---------------------------------------------------------
  // CLOSE BUTTON
  // ---------------------------------------------------------
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      closeModal();
    });
  }

  // ---------------------------------------------------------
  // CLOSE WHEN CLICKING OUTSIDE MODAL BOX
  // ---------------------------------------------------------
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeModal();
      }
    });
  }

  // ---------------------------------------------------------
  // CLOSE WITH ESCAPE KEY
  // ---------------------------------------------------------
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      videoModal &&
      videoModal.classList.contains("show")
    ) {
      closeModal();
    }
  });

  // ---------------------------------------------------------
  // HERO "WATCH NOW" BUTTON
  // ---------------------------------------------------------
  const heroWatchBtn = document.querySelector(".hero .watch-button");

  if (heroWatchBtn) {
    heroWatchBtn.addEventListener("click", () => {
      openModal("https://www.youtube.com/embed/HYVxnPmb15E");
    });
  }
});