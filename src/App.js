import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Candidates from "./components/Candidates";
import NewCandidate from "./components/NewCandidate";

import WithCandidates from "./components/withCandidates";
import menuItems from "./data/menu.json";
import Menu from "./components/Menu";
import About from "./components/About";
import Wait from "./components/Wait";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Menu links={menuItems} />
      <div className="content">
        
        <Routes>
          <Route path="/" element={<Wait name="TODO Home" />} />
          <Route
            path="candidates"
            element={WithCandidates(Candidates)}
          />
          <Route path="newcandidate" element={<NewCandidate />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <NewCandidate />
      {WithCandidates(Candidates)}
    </div>
  );
}

export default App;
