
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">WELCOME TO STREAMX</p>

        <h1>Discover Your Next Favourite</h1>

        <p className="hero-description">
          Explore movies, series, anime, podcasts and more,
          all in one place.
        </p>

        <div className="hero-buttons">
          <a href="#trending" className="hero-watch-btn">
            Explore Now
          </a>

          <a href="#explore" className="hero-info-btn">
            Explore Categories
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
