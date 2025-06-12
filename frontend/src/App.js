// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Match from "./pages/Match";
import Roadmap from "./pages/Roadmap";
import Download from "./pages/Download";
import "./styles/main.css";

const App = () => {
  return (
    <Router>
      <header style={headerStyle}>
        <h1>SkillMapper 🚀</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/analyze">Analyze</Link>
          <Link to="/match">Match</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/download">Download</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/match" element={<Match />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </main>

      <footer>
        © 2025 SkillMapper — Built with 💙 by Subhahana B.
      </footer>
    </Router>
  );
};

const headerStyle = {
  padding: "1.5rem 2rem",
  background: "#ffffff",
  borderBottom: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

export default App;
