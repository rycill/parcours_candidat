import technos from "../data/technos.json";
import levels from "../data/levels.json";
import "./NewCandidate.css";

function NewCandidate({ candidate }) {
  return (
    <div className="section" name="newCandidate">
      <form id="formNewCandidate">
        <label>Nom</label>
        <input type="text" name="firstname" className="field"/>
        <label>Prénom</label>
        <input type="text" name="famillyname" className="field"/>
        <label>Technologie 1</label>
        <select name="profil" className="field">
          <option value="">--Choisissez une technologie--</option>
          {technos.profils.profils.map((techno) => (
            <option key={techno.id} value={techno.id}>
              {techno.titre}
            </option>
          ))}
        </select>
        <label>Niveau Technologie 1</label>
        <select name="niveau" className="field">
          <option value="">--Choisissez un niveau--</option>
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.label}
            </option>
          ))}
        </select>
        <label>Technologie 2</label>
        <select name="profil" className="field">
          <option value="">--Choisissez une technologie--</option>
          {technos.profils.profils.map((techno) => (
            <option key={techno.id} value={techno.id}>
              {techno.titre}
            </option>
          ))}
        </select>
        <label>Niveau Technologie 2</label>
        <select name="niveau" className="field">
          <option value="">--Choisissez un niveau--</option>
          {levels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.label}
            </option>
          ))}
        </select>
        <input type="submit" id="submit" value="Créer" />
      </form>
    </div>
  );
}
export default NewCandidate;
