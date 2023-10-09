import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {
	let initialList = [
		{ id: 1, text: "Clean the office", done: true },
		{ id: 2, text: "Clean the office", done: false },
		{ id: 3, text: "Clean the office", done: false },
		{ id: 4, text: "Clean the office", done: true },
	];
	const [list, SetList] = useState(initialList);
	const [textinput, SetTextinput] = useState(initialList);

	const TodoItems = list.map((item) => {
		return <TodoItem key={item.id} todo={item} />;
	});

	const handleTextInput = (e) => {
		SetTextinput(e.target.value);
	};
	return (
		<Card>
			<Card.Header></Card.Header>
			<Card.Body>
				<ListGroup>{TodoItems}</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type='text' onChange={handleTextInput}  />
				<Button variant="primary" className="float-end">
					Add
				</Button>
			</Card.Footer>
		</Card>
	);
};
export default TodoList;
