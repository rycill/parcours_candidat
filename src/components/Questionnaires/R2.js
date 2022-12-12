import { useLocation } from "react-router-dom";
import Note from "./Note";
import "../../css/questionnaire.css";
import r2Java from "../../data/r2Java.json";

function R2({ items }) {
  const location = useLocation();
  let level1 = location.state.level1;
  if (level1 === "Junior") {
    level1 = "1";
  }
  if (level1 === "Confirmé") {
    level1 = "2";
  }
  if (level1 === "Senior") {
    level1 = "3";
  }
  if (level1 === "Expert") {
    level1 = "4";
  }
  const techno1 = location.state.techno1;
  return (
    <div>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>

      <h3 className="page-title">Questionnaire R2</h3>
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
          {techno1 === "JAVA"
            ? r2Java.map((item) => (
                <div>
                  <h4 className="underline">{item.theme}</h4>
                  {item.questions
                    .filter((q) => q.niveau === "all" || q.niveau === level1)
                    .map((question) => (
                      <div>
                        <h5 className="question">{question.question}</h5>
                        <label className="label">
                          Réponse :
                          <input
                            className="response"
                            type="text"
                            name={question.code}
                          />
                        </label>
                        <label className="label">
                          Note :
                          <Note name={"note" + question.code} />
                        </label>
                      </div>
                    ))}
                </div>
              ))
            : ""}
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
export default R2;
