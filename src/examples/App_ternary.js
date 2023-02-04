import React from "react";
import "./App.css";

const age = 15;

if (age > 18) {
  console.log("IS OVER AGE");
} else {
  console.log("IS UNDER AGE");
}

age >= 18 ? console.log("OVER") : console.log("UNDER");

const App = () => {
  const age = 20;
  const isGreen = false;

  return (
    <div className="App">
      {age >= 18 ? <h1>OVER</h1> : <h1>UNDER</h1>}
      <h1
        style={{ color: isGreen ? "green" : "red", backgroundColor: "yellow" }}
      >
        This has color.
      </h1>
      {isGreen && <button>This is a button</button>}
    </div>
  );

  // if (age >= 18) {
  //   return <h1 className="App">OVER AGE</h1>;
  // } else {
  //   return <h1 className="App">OVER AGE</h1>;
  // }
};

export default App;
