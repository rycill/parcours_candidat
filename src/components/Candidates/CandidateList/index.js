import Candidate from "./CandidateRow";
import "./Candidates.css";
function Candidates({ candidates }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="header">
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Tech 1</th>
            <th scope="col">Niv. T1</th>
            <th scope="col">Tech 2</th>
            <th scope="col">Niv. T2</th>
            <th scope="col">Statut</th>
            <th scope="col"></th>
            {/*
             */}
          </tr>
        </thead>
        <tbody>
          {candidates.map((c, idx) => (
            <tr
              className={
                (idx % 2 === 1 ? "candidateOdd" : "candidateEven") +
                " candidate"
              }
              key={c.id}
            >
              <Candidate candidate={c}></Candidate>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Candidates;
