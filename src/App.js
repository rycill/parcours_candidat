import "./App.css";
import { Routes, Route } from "react-router-dom";
import Candidates from "./components/Candidates";
import NewCandidate from "./components/NewCandidate";
import WithCandidates from "./components/withCandidates";
import menuItems from "./data/menu.json";
import r1Items from "./data/r1.json";
import r2Items from "./data/r2Common.json";
import Menu from "./components/Menu";
import About from "./components/About";
import R1 from "./components/R1";
import R2 from "./components/R2";
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
          <Route path="r2" element={<R2 items={r2Items} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
