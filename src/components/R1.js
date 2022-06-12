import Note from './Note';
import './R1.css';

function R1({ items }) {
	return (
		<div>
			<h2>
				Page R1
			</h2>
			<div>
				<form className="r1">
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
										<Note name={"note" + question.code}/>
									</label>
								</div>
							))}
						</div>
					))}
					<div>
						<input type="reset" name="reset" value="Valider" className="buttons" />
					</div>
				</form>
			</div>
		</div>
	);
}
export default R1;
