import React from "react";

const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{ color: props.completed ? "red" : "black" }}>
        {props.taskName} - {props.id}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>
        {props.completed ? "Completed" : "Not Yet"}
      </button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

export default Task;
