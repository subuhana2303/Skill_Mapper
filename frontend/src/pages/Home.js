// frontend/src/pages/Home.js
import React from "react";
import demoImage from "../assets/demo.png";

const Home = () => {
  return (
    <div className="page">
      <h1>🌟 SkillMapper</h1>
      <p>
        AI-powered roadmap and career matching tool for students and job
        seekers.
      </p>
      <img
        src={demoImage}
        alt="SkillMapper Demo"
        style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
      />
    </div>
  );
};

export default Home;
