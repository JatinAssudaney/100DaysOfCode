import React from "react";
import "./App.css";
import ChangeDocTitleCustomHook from "./components/ChangeDocTitleCustomHook";
// import ChangeDocTitle from "./components/ChangeDocTitle";

function App() {
  return (
    <div className="App">
      {/* <ChangeDocTitle /> */}
      <ChangeDocTitleCustomHook />
    </div>
  );
}

export default App;
