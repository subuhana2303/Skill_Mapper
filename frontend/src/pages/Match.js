// frontend/src/pages/Match.js
import React from "react";
import RoleMatch from "../components/RoleMatch";

const Match = () => {
  return (
    <div className="page">
      <h2>🎯 Best Fit Role</h2>
      <p>Based on your skills and resume, this is the best career role match:</p>
      <RoleMatch />
    </div>
  );
};

export default Match;
