import Note from "./Note";
import "../../css/questionnaire.css";

function R1({ items }) {
  return (
    <div>
      <h3 className="page-title">Questionnaire R1</h3>
      <div>
        <form className="questionnaireForm">
          {items.map((item) => (
            <div>
              <h4 className="theme">{item.theme}</h4>
              {item.questions.map((question) => (
                <div>
                  <h5 className="question">{question.question}</h5>
                  <label className="label">
                    Réponse : <br />
                    <textarea
                      rows="5"
                      cols="600"
                      className="response"
                      name={question.code}
                    ></textarea>
                  </label>
                  <label className="label">
                    Note :
                    <Note name={"note" + question.code} />
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div>
            <input
              type="reset"
              name="reset"
              value="Valider"
              className="buttons"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default R1;
