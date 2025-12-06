// Navbar.jsx
import React, { useState } from "react";
import poseData from "../poses.json";

function Navbar({
  page,
  onChangePage,
  search,
  onSearchChange,
  isLoggedIn,
  onToggleLogin,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState("");

  const posesArray = Array.isArray(poseData) ? poseData : [];

  // Filter by what user types: "b" -> all with b, "ba" -> balasana, bakasana ...
//---   const filteredPoses = posesArray.filter((pose) =>
//   (pose.name || "")
//     .toLowerCase()
//     .startsWith(localQuery.toLowerCase())
// ); --- it was searching with the english name only
  const filteredPoses = posesArray.filter((pose) =>
  {const q = (localQuery || "").toLowerCase();
  const eng = (pose.name || "").toLowerCase();
  const sans = (pose.sanskrit || "").toLowerCase();

  return eng.startsWith(q) || sans.startsWith(q);}
  );

  const handleSelect = (name) => {
    onSearchChange(name);     // used by Slider
    setLocalQuery(name);      // show in input
    setIsOpen(false);
  };

  const handleFocus = () => {
    setIsOpen(true);
    setLocalQuery(search || "");
  };

  return (
    <header className="navbar">
      <div className="n1">
        <div className="navbar-left">
          <div  className="inside-navbar-left-l">
            <button
            className="logo-button"
            onClick={() => onChangePage("home")}
          >
            YogaLite
          </button>
          </div >
          <div className="inside-navbar-left-r"><p>| Breathe. Move. Grow.</p></div>
          
        </div>
      </div>

      <div className="n2">
        {/* Searchable dropdown */}
        <div className="navbar-center">
          <div className="combo">
            <input
              className="search-input"
              type="text"
              placeholder="Search a pose..."
              value={localQuery}
              onChange={(e) => {
                setLocalQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={handleFocus}
            />
            {isOpen && (
              <ul className="combo-list">
                <li
                  className="combo-item"
                  onMouseDown={() => handleSelect("")}
                >
                  All poses
                </li>
                {filteredPoses.map((pose) => (
                  <li
                    key={pose.id}
                    className="combo-item"
                    onMouseDown={() => handleSelect(pose.name)}
                  >
                    {pose.name}
                    {pose.sanskrit && (
                      <span className="combo-sub">
                        {" "}
                        ({pose.sanskrit})
                      </span>
                    )}
                  </li>
                ))}
                {filteredPoses.length === 0 && (
                  <li className="combo-item combo-empty">No matches</li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* right side buttons unchanged */}
        <div className="navbar-right">
          <button className={page === "home" ? "nav-link active" : "nav-link"}
            onClick={() => onChangePage("home")}>
            Home
          </button>
          <button
            className={page === "courses" ? "nav-link active" : "nav-link"}
            onClick={() => onChangePage("courses")}
          >
            Courses
          </button>
          <button
            className={page === "blog" ? "nav-link active" : "nav-link"}
            onClick={() => onChangePage("blog")}
          >
            Blog
          </button>
          <button
            className={page === "about" ? "nav-link active" : "nav-link"}
            onClick={() => onChangePage("about")}
          >
            About
          </button>
          <button  className={page === "futureScope" ? "nav-link active" : "nav-link"}
            onClick={() => onChangePage("future")}>
           Future
          </button>
          {/* login toggle logic. w/o bend just a toggle button */}
          {isLoggedIn ? (
            <button
              className={page === "profile" ? "nav-link active" : "nav-link"}
              onClick={() => onChangePage("profile")}
            >
              Profile
            </button>
          ) : (
            <button className="btn btn-outline" onClick={onToggleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
