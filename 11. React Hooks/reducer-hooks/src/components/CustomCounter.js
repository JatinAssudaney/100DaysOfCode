import React, { useReducer, useState } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.payload };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.payload };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CustomCounter() {
  const [payload, setPayload] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>FirstCount : {count.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>

      <div>SecondCount : {count.secondCounter}</div>
      <input
        type="text"
        value={payload}
        onChange={(e) => setPayload(parseInt(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "increment2", payload: payload })}
      >
        Increment2
      </button>
      <button
        onClick={() => dispatch({ type: "decrement2", payload: payload })}
      >
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CustomCounter;
