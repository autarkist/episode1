import React from "react";
import "./App.css";

const App = () => {
  const names = ["Pedro", "Lukas", "Jake", "Jessica", "Doe", "Mike", "Dustin"];
  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
};

export default App;
