import React, { useState } from "react";

function FunctionClick() {
  const [text, setText] = useState("Please Subscribe");
  const onClickHandler = () => {
    setText("Subscribed");
  };
  return (
    <div>
      <h1>{text}</h1>
      <button type="button" onClick={onClickHandler}>
        Click to change
      </button>
    </div>
  );
}

export default FunctionClick;
