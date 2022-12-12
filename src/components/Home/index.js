import "./Home.css";
import Candidates from "../Candidates/CandidateList";
import WithCandidates from "../Candidates/CandidateList/withCandidates";
function Home(props) {
  return <div>{WithCandidates(Candidates)}</div>;
}
export default Home;
