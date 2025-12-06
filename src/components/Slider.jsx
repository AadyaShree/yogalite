import React, { useEffect, useState } from "react";
import posesData from "../poses.json";

function Slider({ search }) {
  const [index, setIndex] = useState(0);

  const poses = Array.isArray(posesData) ? posesData : [];

  const query = (search || "").toLowerCase();

  // search comes from dropdown; "" = all, otherwise exact name
  const filtered = poses.filter((pose) => {
    if (!query) return true;
    const name = (pose.name || "").toLowerCase();
    return name === query;
  });

  const list = filtered.length > 0 ? filtered : poses;

  useEffect(() => {
    if (!list.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 3000);

    return () => clearInterval(id);
  }, [list.length]);

  if (!list.length) {
    return (
      <section className="hero">
        <div className="hero-text">
          <h1>YogaLite</h1>
          <p>No poses available yet.</p>
        </div>
      </section>
    );
  }

  const current = list[index] || {};

  return (
    <section className="hero">
      <div className="hero-image-box">
        {current.imageUrl ? (
          <img
            src={current.imageUrl}
            alt={current.name}
            className="hero-image"
          />
        ) : (
          <div className="hero-image-placeholder">
            {current.name || "YogaLite"}
          </div>
        )}
      </div>
      <div className="hero-text pose-steps">
        <h1>{current.name || "Yoga pose"}</h1>
        <p>{current.description}</p>

        {current.benefit && (
          <p
            style={{
              fontSize: "0.9rem",
              color: "#000000ff",
              marginBottom: "0.4rem",
            }}
          >
            Benefit: {current.benefit}
          </p>
        )}

        {current.precaution && <p>Precaution: {current.precaution}</p>}

        <p>How to Perform :</p>
        {Array.isArray(current.steps) && current.steps.length > 0 && (
          <ol className="pose-steps">
            {current.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        )}
        
        {current.wikiUrl && (
          <a
            href={current.wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn"
            style={{ marginTop: "0.6rem" }}
          >
            Read more on Wikipedia
          </a>
        )}
      </div>
    </section>
  );
}

export default Slider;
