import React from "react";

const courses = [
  { title: "Beginner Morning Flow", level: "Beginner", duration: "14 days" },
  { title: "Stress Relief Evenings", level: "All levels", duration: "7 days" },
  { title: "Strength & Flexibility", level: "Intermediate", duration: "21 days" }
];

function Courses() {
  return (
    <section className="section">
      <h2 className="section-title">Courses</h2>
      <p className="section-subtitle">
        Pick a path and build a daily yoga habit with guided sequences.
      </p>

      <div className="card-grid">
        {courses.map((course) => (
          <article key={course.title} className="info-card">
            <h3>{course.title}</h3>
            <p>Level: {course.level}</p>
            <p>Duration: {course.duration}</p>
            <button className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
              View details
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Courses;
