// frontend/src/pages/Roadmap.js
import React from "react";
import RoadmapView from "../components/RoadmapView";

const Roadmap = () => {
  return (
    <div className="page">
      <h2>🗺️ Personalized Roadmap</h2>
      <p>Your AI-generated learning plan to grow into your dream role:</p>
      <RoadmapView />
    </div>
  );
};

export default Roadmap;
