import "./App.css";
import { Routes, Route } from "react-router-dom";
import Candidates from "./components/Candidates";
import NewCandidate from "./components/NewCandidate";
import WithCandidates from "./components/withCandidates";
import menuItems from "./data/menu.json";
import r1Items from "./data/r1.json";
import Menu from "./components/Menu";
import About from "./components/About";
import R1 from "./components/R1";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Menu links={menuItems} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="candidates"
            element={WithCandidates(Candidates)}
          />
          <Route path="newcandidate" element={<NewCandidate />} />
          <Route path="about" element={<About />} />
          <Route path="r1" element={<R1 items={r1Items} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
