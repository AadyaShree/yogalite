
import React from "react";

function FutureScope() {
  return (
    <section className="section">
      <h2 className="section-title">Future scope of YogaLite</h2>
      <p className="section-subtitle">
        This version of YogaLite focuses on clean pose exploration. The next
        versions will gradually evolve into a full learning platform with
        guided courses, progress tracking, and a richer profile experience.
      </p>

      <div className="about-grid">
        <article className="info-card">
          <h3>Advanced pose library</h3>
          <ul>
            <li>More asanas with detailed alignment tips, variations, and contraindications.</li>
            <li>Filters by level (beginner, intermediate, advanced), body area, and goal.</li>
            <li>Short video clips or animated sequences for visual learning.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Courses & admin uploads</h3>
          <ul>
            <li>Dedicated admin panel (for Aadya) to create and upload new courses.</li>
            <li>Each course having modules, sessions, duration, and recommended pace.</li>
            <li>Draft / publish control so only approved courses appear to learners.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Course opt‑in & tracking</h3>
          <ul>
            <li>“Enroll” button on each course so users can add it to their schedule.</li>
            <li>Simple checklist of completed sessions with streak and completion percent.</li>
            <li>Reminder hints like “You paused at Day 4 – continue your evening flow?”.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Richer profile & progress</h3>
          <ul>
            <li>Profile dashboard showing current courses, recently viewed poses, and favourites.</li>
            <li>Practice statistics such as total minutes, weekly streak, and top 5 poses practiced.</li>
            <li>Badges for consistency (7‑day streak, 30‑day challenge, focus practice, etc.).</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Community & content</h3>
          <ul>
            <li>Blog section where logged‑in users can share short practice stories or tips.</li>
            <li>Admin ability to highlight selected posts as “Featured reflections”.</li>
            <li>Curated reading lists on topics like stress relief, posture, and study focus.</li>
          </ul>
        </article>

        <article className="info-card">
          <h3>Personalisation & recommendations</h3>
          <ul>
            <li>Questionnaire in profile to capture goals (flexibility, calm mind, back care, etc.).</li>
            <li>Suggested pose sets or mini‑sequences based on user goals and time available.</li>
            <li>Optional “gentle mode” that hides advanced poses if the user is a beginner.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default FutureScope;
