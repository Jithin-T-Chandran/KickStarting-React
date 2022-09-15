import React, { useState } from "react";

function HooksComponent() {
  const [items, setItem] = useState([]);

  const onClickHandler = () => {
    setItem([...items,{id:items.length,value:Math.random().toString()}])
   }
  return (
    <div>
      <button type="button" onClick={onClickHandler}>Click</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default HooksComponent;
