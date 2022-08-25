import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>hello nikhil kp</h1>

      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
