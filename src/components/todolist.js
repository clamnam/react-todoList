import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

const TodoList = () => {
	let initialList = [{ id: 1, text: "Clean the office", done: true }];
	let localList = JSON.parse(localStorage.getItem('todos'))

	if (localList){
		initialList = localList;
	}
	const [list, setList] = useState(initialList);
	const [textinput, setTextInput] = useState("");
	

	useEffect(() =>{
	localStorage.setItem('todos',JSON.stringify(list))
	},[list])

	const handleTextInput = (e) => {
		setTextInput(e.target.value);
	};

	let lastItem = list[list.length - 1]
	let identity = 0;
	if(lastItem){
		let identity = lastItem+1;
	}

	console.log(localList)
	const addTodoItem = () => {
		let newTodo = {
			id: identity,
			text: textinput,
			done: false,
		};

		setList((prevlist) => [...prevlist, newTodo]);
		setTextInput("");
		
	};






	const markAsDone = (id) => {
		const newList = list.map((item) => {
			if (item.id === id) {
				item.done = true;
			}
			return item;
		});
		setList(newList);
	};




	const deleteItem = (id) => {
		const newList = list.filter((item) => item.id !== id);

		setList(newList);
	};



	const handleKeyUp = (e) => {
		if (e.key === 'Enter'){
			addTodoItem();
		}
	}



	return (
		<Card>
			<Card.Header></Card.Header>
			<Card.Body>
				<ListGroup>
					{list.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							markAsDone={markAsDone}
							deleteItem={deleteItem}
						/>
					))}
				</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type="text" onChange={handleTextInput} value={textinput} onKeyUp={handleKeyUp} />
				<Button variant="primary" className="float-end" onClick={addTodoItem}>
					Add
				</Button>
			</Card.Footer>
		</Card>
	);
};

export default TodoList;
