import React, { useEffect, useState } from "react";
import factsData from "../facts.json";

function YogaFacts() {
  const { yogaFacts } = factsData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % yogaFacts.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(id);
  }, [yogaFacts.length]);

  const current = yogaFacts[index];

  return (
    <div className="fact-rotator">
      <p className="fact-title">{current.title}</p>
      <p className="fact-main">{current.fact}</p>
      <p className="fact-details">{current.details}</p>
    </div>
  );
}

export default YogaFacts;
