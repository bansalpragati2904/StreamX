
function ContentSection({ title, id }) {
  return (
    <section className="content-section" id={id}>
      <div className="section-heading">
        <h2>{title}</h2>
        <a href="#explore">View All</a>
      </div>

      <div className="content-grid">
        <p className="empty-message">
          Content will be added here.
        </p>
      </div>
    </section>
  );
}

export default ContentSection;
