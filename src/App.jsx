import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import YogaFacts from "./components/YogaFacts";
import About from "./components/About";
import Footer from "./components/Footer";
import FutureScope from "./components/FutureScope"; 
function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // for now, manual

  return (
    <div className="app-container">
      <Navbar
        page={page}
        onChangePage={setPage}
        search={search}
        onSearchChange={setSearch}
        isLoggedIn={isLoggedIn}
        onToggleLogin={() => setIsLoggedIn((v) => !v)}
      />

      <main>
        {page === "home" && (
          <div className="home-flex">
            <div className="home-slider">
              <Slider search={search} />
            </div>
            <div className="home-facts">
              <YogaFacts />
            </div>
          </div>
        )}

        {page === "courses" && <h2>Courses page (coming soon)</h2>}
        {page === "blog" && <h2>Blog page (coming soon)</h2>}
        {page === "about" && <About />}
        {page === "future" && <FutureScope/>} {/* 'future' here must match the parameter passed in onClick function in Navbar.jsx*/}
        {page === "profile" && <h2>Profile page (coming soon)</h2>}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
