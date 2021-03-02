import { useState } from "react";
import "./styles.css";

function Toast() {
  return (
    <div className="toast">
      <div className="toast__container">
        <h2>Toast</h2>
      </div>
    </div>
  );
}

export default function App() {
  const [btnText, setBtnText] = useState("Show");

  let clickHandler = (event) => {
    btnText === "Show" ? setBtnText("Hide") : setBtnText("Show");
  };

  return (
    <div className="App">
      <button className="btn" onClick={clickHandler}>
        {btnText}
      </button>
      {btnText === "Hide" && <Toast />}
      {/* <Toast /> */}
    </div>
  );
}
