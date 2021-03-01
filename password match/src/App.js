import { useState } from "react";
import "./styles.css";

export default function App() {
  var [msg, setMsg] = useState("");
  var [input1, setInput1] = useState("");
  var [type, setType] = useState("password");
  var [btnText, setBtnText] = useState("Show Password");

  var changeHandler1 = (event) => {
    let inputVal = event.target.value;
    setInput1(inputVal);
  };

  var changeHandler2 = (event) => {
    let inputVal = event.target.value;

    if (inputVal === input1) {
      setMsg("passwords matched");
    } else {
      setMsg("passwords do not match");
    }
  };

  function ShowAndHidePasswordBtn() {
    let isBtnTextShow = true;
    let clickHandler = (event) => {
      if (isBtnTextShow) {
        setType("text");
        setBtnText("Hide Password");
        isBtnTextShow = false;
      } else {
        setType("password");
        setBtnText("Show Password");
        isBtnTextShow = true;
      }
    };

    return <button onClick={clickHandler}>{btnText}</button>;
  }

  return (
    <div className="App">
      <h1>PASSWORD MATCH</h1>
      <input style={{ margin: "20px" }} type={type} onChange={changeHandler1} />
      <ShowAndHidePasswordBtn />
      <br />
      <br />
      <input style={{ margin: "20px" }} type={type} onChange={changeHandler2} />
      <ShowAndHidePasswordBtn />
      <br />
      <h1>{msg}</h1>
      <button disabled={msg === "passwords matched" ? false : true}>
        Submit
      </button>
    </div>
  );
}
