// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

// To avoid this, we can use the useRef Hook.

import React, { useRef, useState } from "react";

const RefTutorial = () => {
  // What is useRef? - dom manipulate
  const refElement = useRef("");
  const [name, setName] = useState("Ayush");
  console.log(refElement);

  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "Saxena";
  }

  return (
    <div>
      <h1>Learning useRef</h1>
      <input
        type="text"
        ref={refElement}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handle input</button>
    </div>
  );
};

export default RefTutorial;
