import React from "react";
import "./App.css";
import { planets } from "./planets.js";

const App = () => {
  return (
    <div className="App">
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
};

export default App;
