
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="../member1-home/home.html" className="logo">
          STREAMX
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/member2-content/movies.html">Movies</a>
          <a href="../../member2-content/series.html">Series</a>
          <a href="../../member3-live/live.html">LIVE</a>
        </div>

        <div className="right-menu">
          <button
            className="search-icon-btn"
            type="button"
            aria-label="Search"
            onClick={() => {
              window.dispatchEvent(new Event("streamx-search"));
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          <a
            href="../../member4-user/profile.html"
            className="profile-link"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
