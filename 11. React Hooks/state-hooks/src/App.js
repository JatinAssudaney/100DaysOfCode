import React from "react";
import "./App.css";
import HookPreviousStateCounter from "./components/HookPreviousStateCounter";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      <HookPreviousStateCounter />
    </div>
  );
}

export default App;
