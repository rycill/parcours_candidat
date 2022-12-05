import "./Home.css";
import Candidates from "../Candidates/CandidateList";
import WithCandidates from "../Candidates/CandidateList/withCandidates";
import NewCandidate from "../Candidates/NewCandidate";
function Home(props) {
  return (
    <div>
      <NewCandidate />
      {WithCandidates(Candidates)}
    </div>
  );
}
export default Home;
