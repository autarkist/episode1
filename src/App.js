import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [age, setAge] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showText, setShowText] = useState(true);
  const [color, setColor] = useState(true);

  const increaseAge = () => {
    setAge(age + 5);
    console.log(age);
  };

  const handleInputChnage = (event) => {
    setInputValue(event.target.value);
  };

  // const toggleShowText = () => {
  //   setShowText(!showText);
  // };

  return (
    <div className="App">
      {age}
      <div>
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={() => setAge(0)}>Reset</button>
        <button onClick={() => setAge(age - 1)}>Decrease Age</button>
      </div>
      <div>
        <input type="text" onChange={handleInputChnage} />
      </div>
      <div>{inputValue}</div>
      <div>
        {/* <button onClick={toggleShowText}>Show/Hide</button> */}
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show/Hide
        </button>
      </div>
      {showText && <h1>Hi My name is Pedro</h1>}
      <div>
        <button onClick={() => setColor(!color)}>Change Color</button>
      </div>
      <h2 style={{ color: color ? "red" : "blue" }}>
        I've been learning a react frameworks.
      </h2>
    </div>
  );
};

export default App;
