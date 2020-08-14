// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

/* function getButtonText() {
  return "Click on Me";
} */

function getTime() {
  return new Date().toLocaleTimeString();
}

// Create a react component
const App = () => {
  // const buttonText = "Click Me!";
  const buttonText = { text: "Click Me!" };
  const style = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px",
    marginLeft: "4px",
    cursor: "pointer",
  };
  return (
    <div>
      <div>Current Time</div>
      <h3>{getTime()}</h3>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
