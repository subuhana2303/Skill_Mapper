// frontend/src/pages/Analyze.js
import React from "react";
import UploadResume from "../components/UploadResume";

const Analyze = () => {
  return (
    <div className="page">
      <h2>📤 Analyze Your Resume</h2>
      <p>Upload your resume or enter your skills to get started.</p>
      <UploadResume />
    </div>
  );
};

export default Analyze;
