import React from "react";

const blogs = [
  {
    title: "My first week of yoga",
    author: "Priya Sharma",
    excerpt: "Starting with simple breathing and stretching improved my sleep and mood."
  },
  {
    title: "Yoga during exam season",
    author: "Ankit Verma",
    excerpt: "Short evening sessions helped me stay calm and focused while studying."
  }
];

function BlogSection() {
  return (
    <section className="section">
      <h2 className="section-title">Community blog</h2>
      <p className="section-subtitle">
        Read real experiences from learners and get inspired for your own journey.
      </p>

      <div className="card-grid">
        {blogs.map((blog) => (
          <article key={blog.title} className="info-card">
            <h3>{blog.title}</h3>
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              By {blog.author}
            </p>
            <p style={{ marginTop: "0.4rem" }}>{blog.excerpt}</p>
            <button className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
              Read more
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
