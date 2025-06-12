import React from "react";


const SkillList = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="card fade-in">
      <h2 className="card-title">🧠 Extracted Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
