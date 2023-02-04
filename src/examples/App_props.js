// import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={22} email="pedro@pedro.com" />
      <User name="Jake" age={22} email="jake@pedro.com" />
      <User name="Jessica" age={22} email="jessica@pedro.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      {/* <h1>Pedro</h1>
      <h1>21</h1>
      <h1>pedro@pedro.com</h1> */}
    </div>
  );
};

export default App;
