import { useState } from "react";
import data from "./data";
import "./birthday.css";

const App = () => {
	const removePeople = (id) => {
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};
	const [people, setPeople] = useState(data);
	return (
		<>
			<div className="container">
				<h2>{people.length} persons birthdays today</h2>
				{people.map((person) => {
					const { name, age, image, id } = person;
					return (
						<div key={id} className="person-card">
							<img src={image} alt={name} />
							<h4>
								{name} - <span>{age} years old</span>
							</h4>
							<button onClick={() => removePeople(id)}>remove</button>
						</div>
					);
				})}
				<button className="clear-all" onClick={() => setPeople([])}>
					clear all
				</button>
			</div>
		</>
	);
};
export default App;
