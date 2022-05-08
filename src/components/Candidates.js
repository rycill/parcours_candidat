import Candidate from "./Candidate";
import './Candidates.css';
function Candidates({candidates}) {
    return (
        <div>
            <ul>
            <div className="header">
                <span className="name">Nom</span>
                <span className="firstname">Prénom</span>
                <span className="specialties">Profil</span>
                <span className="specialties">Statut</span>
            </div>
            </ul>
            <ul>
                {candidates.map((c, idx) => <li className={idx % 2 === 1 ? "candidateOdd" : "candidateEven"} key={c.id}><Candidate candidate={c}></Candidate></li>)}
            </ul>        
        </div>
    );
}
export default Candidates;
