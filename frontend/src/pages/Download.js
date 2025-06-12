// frontend/src/pages/Download.js
import React from "react";

const Download = () => {
  return (
    <div className="page">
      <h2>📥 Download Roadmap</h2>
      <p>Your personalized learning roadmap is ready.</p>
      <a
        href="/roadmap.pdf"
        download="MySkillMapperRoadmap.pdf"
        className="btn-download"
      >
        Download PDF
      </a>
    </div>
  );
};

export default Download;
