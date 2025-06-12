import React from "react";
const RoadmapView = ({ roadmap }) => {
  if (!roadmap || roadmap.length === 0) return null;

  return (
    <div className="card fade-in">
      <h2 className="card-title">📘 Your Personalized Roadmap</h2>
      <ol className="roadmap-list">
        {roadmap.map((step, index) => (
          <li key={index} className="roadmap-item">
            <span className="roadmap-week">Week {index + 1}:</span> {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoadmapView;
