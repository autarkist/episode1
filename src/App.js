import "./App.css";
import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  // const [completed, setCompleted] = useState(false);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    const newTodoList = [...todoList, task];

    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    const newTodoList = todoList.map((task) => {
      if (task.id === id) {
        // setCompleted(!completed);
        // task.completed = !task.completed;
        // return task;
        //객체의 일부 요소의 값을 바꿀 때, 스프레드 연산자로
        //키값을 나열하고, 바꿀 요소를 덧붙여서 덮어쓰기 한다.....
        return { ...task, completed: true };
      }
      return task;
    });
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
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
