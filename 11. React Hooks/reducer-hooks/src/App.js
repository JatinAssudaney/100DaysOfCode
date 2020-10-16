import React from "react";
import "./App.css";
import ComponentA from "./components/useReducerWithContext/ComponentA";
import ComponentB from "./components/useReducerWithContext/ComponentB";
import ComponentC from "./components/useReducerWithContext/ComponentC";
// import MultipleUseReducer from "./components/MultipleUseReducer";
// import Counter from "./components/Counter";
// import CustomCounter from "./components/CustomCounter";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CustomCounter /> */}
      {/* <MultipleUseReducer /> */}

      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
