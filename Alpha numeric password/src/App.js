import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");

  const containsNum = (password) => {
    for (char of password) {
      let currChar = parseInt(char);
      if (!isNaN(currChar)) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="App">
      <h1>Alpha Numeric Password</h1>
      <input
        type="password"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <p>
        {containsNum(val)
          ? "valid password"
          : val
          ? "password must contain a digit"
          : ""}
      </p>
    </div>
  );
}
