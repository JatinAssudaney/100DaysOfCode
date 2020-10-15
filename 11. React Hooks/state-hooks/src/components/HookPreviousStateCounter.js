import React, { useState } from "react";

function HookPreviousStateCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const resetCount = () => {
    return setCount(initialCount);
  };
  const incrementCount = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <div>Count : {count} </div>
      <button onClick={incrementCount}>+</button>
      <button onClick={resetCount}>RESET</button>
    </div>
  );
}

export default HookPreviousStateCounter;
