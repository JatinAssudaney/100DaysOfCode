import React, { createContext, useReducer } from "react";
import "./App.css";

import DataFetchingReducer from "./components/DataFetchingReducer";
// import DataFetching from "./components/DataFetching";
// import ComponentA from "./components/useReducerWithContext/ComponentA";
// import ComponentB from "./components/useReducerWithContext/ComponentB";
// import ComponentC from "./components/useReducerWithContext/ComponentC";
// import MultipleUseReducer from "./components/MultipleUseReducer";
// import Counter from "./components/Counter";
// import CustomCounter from "./components/CustomCounter";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <Counter /> */}
        {/* <CustomCounter /> */}
        {/* <MultipleUseReducer /> */}

        {/* Count : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <DataFetching /> */}
        <DataFetchingReducer />
      </div>
    </CountContext.Provider>
  );
}

export default App;
