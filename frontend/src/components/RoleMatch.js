import React from "react";


const RoleMatch = ({ role }) => {
  if (!role) return null;

  return (
    <div className="card fade-in">
      <h2 className="card-title">🎯 Best Fit Role</h2>
      <p className="role-match-text">
        Based on your current profile, we suggest:
        <span className="role-highlight"> {role}</span>
      </p>
    </div>
  );
};

export default RoleMatch;
