// src/components/About.jsx
import React from "react";

function About() {
  return (
    <section className="section">
      <h2 className="section-title">About YogaLite</h2>
      <p className="section-subtitle">
        YogaLite is a calm, beginner-friendly space to learn yoga with clear
        pose information, benefits, precautions, and steps so you can practice
        safely and confidently.
      </p>

      <div className="about-grid">
        <article className="info-card">
          <h3>Who YogaLite is for</h3>
          <ul>
            <li>Beginners who want to understand each asana before trying it.</li>
            <li>Students and professionals needing short, focused guidance.</li>
            <li>Anyone who prefers clean visuals and text-based learning.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>What you can do</h3>
          <ul>
            <li>Explore key poses with step-by-step instructions and safety notes.</li>
            <li>Search asanas by English or Sanskrit name using the dropdown.</li>
            <li>Read rotating yoga facts that connect practice with science and tradition.</li>
            <li>Combine poses to design your own short practice sessions.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Our approach</h3>
          <ul>
            <li>Clarity over complexity: one pose at a time with concise explanations.</li>
            <li>Safety first: every pose highlights basic precautions and hints to modify.</li>
            <li>Consistency: a warm, grounded theme that keeps your focus on practice.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Future plans</h3>
          <ul>
            <li>Guided course flows for morning energy, stress relief, and study focus.</li>
            <li>Simple progress tracking like favourites and recently viewed poses.</li>
            <li>A community blog where learners can share experiences and tips.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
