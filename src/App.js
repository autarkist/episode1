import "./App.css";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      // return task !== taskName;
      if (task === taskName) {
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
              <div>
                <h1>{task}</h1>
                <button onClick={() => deleteTask(task)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
