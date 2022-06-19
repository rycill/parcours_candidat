import './Candidate.css'
function Candidate({candidate}) {
    return (
        <div className="candidate">
            <span className="name">{candidate.name}</span>
            <span className="firstname">{candidate.firstname}</span>
            <span className="specialties">{candidate.techno1}</span>
            <span className="specialties">{candidate.level1}</span>
            <span className="specialties">{candidate.techno2}</span>
            <span className="specialties">{candidate.level2}</span>
            <span className="specialties">{candidate.statut}</span>
            <input type="submit" value="Editer" />
        </div>
    );
}
export default Candidate;
