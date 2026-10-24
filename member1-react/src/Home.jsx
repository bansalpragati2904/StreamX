
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WatchTogether from "./components/WatchTogether";
import "./home.css";
import {
  movies,
  bollywood,
  anime,
  cartoons,
  podcasts,
  realityShows,
  trendingTitles,
} from "./home.js";

const STORAGE_KEYS = {
  myList: "streamx-my-list",
  history: "streamx-watch-history",
};

function readStorage(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function Home() {
  const [myList, setMyList] = useState(() =>
    readStorage(STORAGE_KEYS.myList)
  );
  const [history, setHistory] = useState(() =>
    readStorage(STORAGE_KEYS.history)
  );
  const [search, setSearch] = useState("");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [playingTitle, setPlayingTitle] = useState(null);
  const [toast, setToast] = useState("");

  const allTitles = [
    ...movies,
    ...bollywood,
    ...anime,
    ...cartoons,
    ...podcasts,
    ...realityShows,
    ...trendingTitles,
  ];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.myList, JSON.stringify(myList));
  }, [myList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
  }, [history]);

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  }

  function toggleMyList(title) {
    const saved = myList.includes(title.id);

    setMyList((previous) =>
      saved
        ? previous.filter((id) => id !== title.id)
        : [...previous, title.id]
    );

    showToast(
      saved
        ? `${title.title} removed from My List.`
        : `${title.title} added to My List.`
    );
  }

  function playTitle(title) {
    setPlayingTitle(title);
    setSelectedTitle(null);

    setHistory((previous) => [
      { id: title.id, progress: 10 },
      ...previous.filter((item) => item.id !== title.id),
    ].slice(0, 12));
  }

  function renderCards(titles) {
    if (!titles.length) {
      return <p className="search-empty">No titles found.</p>;
    }

    return titles.map((title) => (
      <article className="media-card" key={title.id}>
        <div className="media-poster">
          <img
            className="poster-image"
            src={title.image}
            alt={`${title.title} poster`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <button
            type="button"
            className="poster-play"
            onClick={() => playTitle(title)}
          >
            ▶
          </button>
        </div>

        <div className="media-info">
          <h3 className="media-title">{title.title}</h3>
          <p className="media-meta">
            {title.category} · {title.year} · {title.duration}
          </p>

          <div className="media-actions">
            <button
              type="button"
              className="card-action"
              onClick={() => playTitle(title)}
            >
              ▶ Play
            </button>

            <button
              type="button"
              className="card-action"
              onClick={() => toggleMyList(title)}
            >
              {myList.includes(title.id) ? "✓ Saved" : "+ My List"}
            </button>

            <button
              type="button"
              className="card-action"
              onClick={() => setSelectedTitle(title)}
            >
              Details
            </button>
          </div>
        </div>
      </article>
    ));
  }

  const sections = [
    { title: "Trending Now", id: "trending", titles: trendingTitles },
    { title: "Popular Asian Series", id: "asian", titles: movies },
    { title: "Bollywood", id: "bollywood", titles: bollywood },
    { title: "Anime", id: "anime", titles: anime },
    { title: "Cartoons", id: "cartoons", titles: cartoons },
    { title: "Podcasts", id: "podcasts", titles: podcasts },
    { title: "Reality Shows", id: "reality", titles: realityShows },
    {
      title: "My List",
      id: "my-list",
      titles: allTitles.filter((title) => myList.includes(title.id)),
    },
    {
      title: "Continue Watching",
      id: "continue",
      titles: history
        .map((item) => allTitles.find((title) => title.id === item.id))
        .filter(Boolean),
    },
  ];

  const visibleTitles = search.trim()
    ? allTitles.filter((title) =>
        `${title.title} ${title.category} ${title.description}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : null;

  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <section className="content-section">
          <div className="section-heading">
            <h2>Search StreamX</h2>
          </div>

          <input
            className="streamx-search-input"
            type="search"
            placeholder="Search movies, series, anime, podcasts..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        {visibleTitles ? (
          <section className="content-section">
            <div className="section-heading">
              <h2>Search Results</h2>
            </div>
            <div className="content-grid">{renderCards(visibleTitles)}</div>
          </section>
        ) : (
          sections.map((section) => (
            <section
              className="content-section"
              id={section.id}
              key={section.id}
            >
              <div className="section-heading">
                <h2>{section.title}</h2>
              </div>
              <div className="content-grid">
                {renderCards(section.titles)}
              </div>
            </section>
          ))
        )}

        <WatchTogether />
      </main>

      {selectedTitle && (
        <div className="streamx-overlay" onClick={() => setSelectedTitle(null)}>
          <div
            className="streamx-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedTitle(null)}
            >
              ✕
            </button>
            <img
              src={selectedTitle.image}
              alt={selectedTitle.title}
              className="details-poster"
            />
            <h2>{selectedTitle.title}</h2>
            <p>
              {selectedTitle.category} · {selectedTitle.year} ·{" "}
              {selectedTitle.duration}
            </p>
            <p>{selectedTitle.description}</p>
            <button type="button" onClick={() => playTitle(selectedTitle)}>
              ▶ Play
            </button>
            <button
              type="button"
              onClick={() => toggleMyList(selectedTitle)}
            >
              {myList.includes(selectedTitle.id)
                ? "✓ Saved"
                : "+ My List"}
            </button>
          </div>
        </div>
      )}

      {playingTitle && (
        <div className="streamx-overlay" onClick={() => setPlayingTitle(null)}>
          <div
            className="streamx-modal video-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setPlayingTitle(null)}
            >
              ✕
            </button>
            <h2>{playingTitle.title}</h2>

            {playingTitle.video ? (
              <iframe
                src={playingTitle.video}
                title={playingTitle.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <p>No video source available for this title.</p>
            )}
          </div>
        </div>
      )}

      {toast && <div className="toast show">{toast}</div>}
    </>
  );
}

export default Home;
