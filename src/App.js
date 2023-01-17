import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-test="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCount((preve) => preve - 1)}
          disabled={isDisabled}
        ></button>
        <button
          data-testid="plus-button"
          onClick={() => setCount((preve) => preve + 1)}
          disabled={isDisabled}
        ></button>
        <div>
          <button
            style={{ bacgroundColor: "blue" }}
            daat-testid="on/off-button"
            onClick={() => setIsDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
