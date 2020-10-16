import React from "react";
import "./App.css";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";
// import FocusInput from "./components/FocusInput";

function App() {
  return (
    <div className="App">
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
