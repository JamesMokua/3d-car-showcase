import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="app-container">
      <div id="webgi-canvas-container">
        <canvas id="webgi-canvas"></canvas>
      </div>
      {/* <div className="loader">
        <p>Loading...Please wait</p>
        <div className="progress"></div>
      </div> */}
      <Hero/>
    </div>
  );
}

export default App;
