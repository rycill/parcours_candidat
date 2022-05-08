import './Home.css';
import WithCandidates from "./withCandidates";
import Candidates from "./Candidates";
import NewCandidate from './NewCandidate';
function Home(props) {
    return (
        <div>
            <NewCandidate />
            {WithCandidates(Candidates)}
        </div>
    );
}
export default Home;
