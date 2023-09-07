import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleAsciiClick = () => {
    console.log("ASCII was Clicked");
    let newText = text.charCodeAt(0);
    console.log(`The ASCII value is: ${result}`);
  };
  //how to handle event
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  //how to set state
  const [text, setText] = useState("Enter text here");
  //   text=("new text");//wrong way
  //   seTtext=("new text");//write way
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my box"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary" onClick={handleAsciiClick}>
        Convert to ASCII
      </button>
    </div>
  );
}
