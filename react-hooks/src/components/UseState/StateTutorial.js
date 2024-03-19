// useState is a React Hook that lets you add a state variable to your component.

import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, newChangeValue] = useState("Ayush");

  const onChange = (event) => {
    const newval = event.target.value;
    newChangeValue(newval);
  };

  return (
    <div>
      <h1>{inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="type something"
        onChange={onChange}
      />
    </div>
  );
};

export default StateTutorial;
