import { useState } from "react";
import "./styles.css";

export default function App() {
  var [count, setCount] = useState(0);

  var PlusHandler = (event) => {
    count++;
    setCount(count);
  };

  var MinusHandler = (event) => {
    count--;
    setCount(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <button onClick={PlusHandler}>+</button>
      <button disabled={count === 0} onClick={MinusHandler}>
        -
      </button>
      <h2>{count}</h2>
      {/* <h1>-By Rohan</h1> */}
    </div>
  );
}
