import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="app-container">
      <button className="app-button" onClick={Increase}>
        Increase
      </button>
      <button className="app-button" onClick={Decrease}>
        Decrease
      </button>
      <button className="app-button" onClick={Reset}>
        Set to Zero
      </button>
      <h1 className="app-value">{count}</h1>
    </div>
  );
}

export default App;
