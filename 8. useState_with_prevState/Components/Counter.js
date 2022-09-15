import React, { useState } from "react";

function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const onIncrementClickHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrementClickHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const onResetClickHandler = () => {
    setCount(initialCount);
  };
  const onIncrementFiveClickHandler = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1);
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={onIncrementClickHandler}>
        +
      </button>
      <button type="button" onClick={onResetClickHandler}>
        Reset
      </button>
      <button type="button" onClick={onDecrementClickHandler}>
        -
      </button>
      <br />
      <button type="button" onClick={onIncrementFiveClickHandler}>
        +5
      </button>
    </div>
  );
}

export default Counter;
