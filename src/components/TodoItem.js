import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const TodoItem = (props) => {
	const { text } = props.todo;

	return <ListGroup.Item>{text}</ListGroup.Item>;
};

export default TodoItem;
