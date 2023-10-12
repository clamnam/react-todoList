import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

const TodoItem = (props) => {
  const handleMarkAsDone = () => {
    props.markAsDone(props.todo.id);
  };

  const handleDeleteItem = () => {
    props.deleteItem(props.todo.id);
  };

  return (
    <ListGroup.Item>
      <span className={props.todo.done ? "done" : ""}>{props.todo.text}</span>
      <Badge className="float-end" onClick={handleMarkAsDone}>
        {props.todo.done ? "Completed" : "Mark as Done"}
      </Badge>
      <Badge className="float-end bg-danger mx-2" onClick={handleDeleteItem}>
        Delete
      </Badge>
    </ListGroup.Item>
  );
};

export default TodoItem;
