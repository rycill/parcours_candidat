import { useLocation } from 'react-router-dom';
import Note from './Note';
import './R2.css';
import r2Java from "../data/r2Java.json";

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
			<h2>
				Page R2
			</h2>
			<div>
				<form className="r2">
					{items.map((item) => (
						<div>
							<h4 className="underline">{item.theme}</h4>
							{item.questions.map((question) => (
								<div>
									<h5 className="question">{question.question}</h5>
									<label className="label">
										Réponse :
										<input className="response" type="text" name={question.code} />
									</label>
									<label className="label">
										Note :
										<Note name={"note" + question.code} />
									</label>
								</div>
							))}
						</div>
					))}
					{techno1 === "JAVA" ? r2Java.map((item) => (
						<div>
							<h4 className="underline">{item.theme}</h4>
							{item.questions.filter(q => q.niveau === "all" || q.niveau === level1).map((question) => (
								<div>
									<h5 className="question">{question.question}</h5>
									<label className="label">
										Réponse :
										<input className="response" type="text" name={question.code} />
									</label>
									<label className="label">
										Note :
										<Note name={"note" + question.code} />
									</label>
								</div>
							))}
						</div>
					)) : ""}
					<div>
						<input type="reset" name="reset" value="Valider" className="buttons" />
					</div>
				</form>
			</div>
		</div>
	);
}
export default R2;
