import './Candidate.css'
function Candidate({candidate}) {
    return (
        <div className="candidate">
            <span className="name">{candidate.name}</span>
            <span className="firstname">{candidate.firstname}</span>
            <span className="specialties">{candidate.profil}</span>
            <span className="specialties">{candidate.level}</span>
            <span className="specialties">{candidate.statut}</span>
        </div>
    );
}
export default Candidate;
