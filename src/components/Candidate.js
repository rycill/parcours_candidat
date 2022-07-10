import './Candidate.css';
import R1Button from "./r1Button";
import R2Button from "./r2Button";
function Candidate({candidate}) {
    const statut = candidate.statut;
    let button;
    if (statut === 'R1') {
      button = <R1Button/>;
    }
    if (statut === 'R2') {
        button = <R2Button level1={candidate.level1} techno1={candidate.techno1}/>;
    }
    return (
        <div className="candidate">
            <span className="name">{candidate.name}</span>
            <span className="firstname">{candidate.firstname}</span>
            <span className="specialties">{candidate.techno1}</span>
            <span className="specialties">{candidate.level1}</span>
            <span className="specialties">{candidate.techno2}</span>
            <span className="specialties">{candidate.level2}</span>
            <span className="specialties">{candidate.statut}</span>
            {button}
        </div>
    );
}
export default Candidate;
