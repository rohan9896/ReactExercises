import React, { useState } from "react";
import "./styles.css";

function Home() {
  return (
    <div>
      <h1>This is Home component</h1>
      <p>
        This is text in home component. Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is About component</h1>
      <p>
        This is text in about component. bcbecdbdeucxjcbskckdj wsjsdjfjdkkskd
      </p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>This is Profile component</h1>
      <p>
        This is text in profile component.
        qwertyjhgvhjhbnjnjcdjndckcnkjdickdckdmnjcdkmjncdkmjcdk
      </p>
    </div>
  );
}

export default function App() {
  let [
    [homeClicked, aboutClicked, profileClicked],
    setButtonClicked
  ] = useState([true, false, false]);

  let homeClickHandler = () => {
    setButtonClicked([true, false, false]);
  };

  let aboutClickHandler = () => {
    setButtonClicked([false, true, false]);
  };

  let profileClickHandler = () => {
    setButtonClicked([false, false, true]);
  };

  return (
    <div className="App">
      <button
        onClick={homeClickHandler}
        style={{
          margin: "20px",
          padding: "5px",
          backgroundColor: homeClicked ? "#9CA3AF" : "white"
        }}
      >
        Home
      </button>
      <button
        onClick={aboutClickHandler}
        style={{
          margin: "20px",
          padding: "5px",
          backgroundColor: aboutClicked ? "#9CA3AF" : "white"
        }}
      >
        About
      </button>
      <button
        onClick={profileClickHandler}
        style={{
          margin: "20px",
          padding: "5px",
          backgroundColor: profileClicked ? "#9CA3AF" : "white"
        }}
      >
        Profile
      </button>
      {homeClicked && <Home />}
      {aboutClicked && <About />}
      {profileClicked && <Profile />}
    </div>
  );
}
