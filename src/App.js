import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <div>
      <section
        className="hero"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="parallax"></div>
      </section>
      <section className="second-layer"></section>
      <section className="third-layer"></section>
    </div>
  );
}

export default App;
