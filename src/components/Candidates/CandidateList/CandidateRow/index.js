import "./Candidate.css";
import R1Button from "./r1Button";
import R2Button from "./r2Button";
import { getCandidateProfile } from "./candidateFn";
export const Candidate = ({ candidate }) => {
  const statut = candidate.statut;
  let button;
  if (statut === "R1") {
    button = <R1Button />;
  }
  if (statut === "R2") {
    button = <R2Button level1={candidate.level1} techno1={candidate.techno1} />;
  }
  return (
    <>
      <td className="name">{candidate.name}</td>
      <td className="firstname">{candidate.firstname}</td>
      <td className="profile">{getCandidateProfile(candidate)}</td>
      <td className="specialties">{candidate.statut}</td>
      {button}
    </>
  );
};
export default Candidate;
