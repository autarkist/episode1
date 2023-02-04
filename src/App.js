import "./App.css";
import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    const newTodoList = [...todoList, task];

    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      // return task !== taskName;
      if (task.id === id) {
        return false; // this task doesn't want keeping
      } else {
        return true; // this task wants keeping
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="App">
        <div className="addTask">
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
          {todoList.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
