import technos from "../data/technos.json";
import "./NewCandidate.css";

function NewCandidate({ candidate }) {
  console.log('NewCandidate')
  return (
    <div className="section" name="newCandidate">
  
      <form id="formNewCandidate">
        <label>Nom :
        <input type="text" name="firstname" />
        </label>
        <label>Prénom :
        <input type="text" name="famillyname" />
        </label>
        <label>Profil :
        <select name="profil">
          <option value="">--Choisissez un profil--</option>
          {technos.profils.profils.map((techno) => (
            <option key={techno.id} value={techno.id}>
              {techno.titre}
            </option>
          ))}
        </select></label>

        <input type="submit" id="submit" value="Créer" />
      </form>
    </div>
  );
}
export default NewCandidate;
