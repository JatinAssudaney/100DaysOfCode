import React from "react";
import "./App.css";
import HookCounterObject from "./components/HookCounterObject";
// import HookPreviousStateCounter from "./components/HookPreviousStateCounter";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookPreviousStateCounter /> */}
      <HookCounterObject />
    </div>
  );
}

export default App;
