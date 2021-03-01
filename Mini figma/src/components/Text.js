import { useState } from "react";
import "./Text.css";

function Text() {
  const [text, setText] = useState("Sample Text");
  const [textSize, setTextSize] = useState(16);
  const [textFont, setTextFont] = useState("Arial");
  const [textBgColor, setTextBgColor] = useState("#9CA3AF");

  const colors = [
    {
      colorName: "grey",
      hex: "#9CA3AF"
    },
    {
      colorName: "red",
      hex: "#EF4444"
    },
    {
      colorName: "yellow",
      hex: "#FCD34D"
    },
    {
      colorName: "green",
      hex: "#6EE7B7"
    },
    {
      colorName: "blue",
      hex: "#60A5FA"
    }
  ];

  const textStyle = {
    fontSize: textSize,
    fontFamily: textFont
  };

  const changeFontHandler = (e) => {
    let inp = e.target.value;
    inp = parseInt(inp);
    switch (inp) {
      case 1:
        setTextFont("Arial");
        break;
      case 2:
        setTextFont("Courier");
        break;
      case 3:
        setTextFont("Candara");
        break;
      case 4:
        setTextFont("Garamond");
        break;
      default:
        setTextFont("Arial");
        break;
    }
  };

  return (
    <div>
      <div className="text__input">
        <p>Enter your text here:</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </div>
      <div style={{ backgroundColor: textBgColor }} className="text">
        <p style={textStyle}>{text}</p>
      </div>
      <div>
        <button
          onClick={() => setTextSize(textSize + 8)}
          disabled={textSize === 200 ? true : false}
          className="text__button"
        >
          +
        </button>
        <span>{textSize}px</span>
        <button
          onClick={() => setTextSize(textSize - 8)}
          disabled={textSize === 8 ? true : false}
          className="text__button"
        >
          -
        </button>
      </div>
      <p>Select font from here: </p>
      <div style={{ margin: "10px" }}>
        <select onChange={changeFontHandler} className="text__dropdown">
          <option value={1}>Arial</option>
          <option value={2}>Courier</option>
          <option value={3}>Candara</option>
          <option value={4}>Garamond</option>
        </select>
      </div>
      <p>Select backgroundColor from here: </p>
      {colors.map((color) => {
        return (
          <button
            onClick={() => setTextBgColor(color.hex)}
            style={{
              backgroundColor: color.hex,
              height: "30px",
              width: "90px",
              margin: "20px"
            }}
          >
            {color.colorName}
          </button>
        );
      })}
    </div>
  );
}

export default Text;
