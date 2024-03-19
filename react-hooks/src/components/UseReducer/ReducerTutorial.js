// The useReducer Hook is similar to the useState Hook.

// It allows for custom state logic.

// If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// The useReducer Hook accepts two arguments.

// useReducer(<reducer>, <initialState>)

import React from "react";
import Counter from "./Counter";

const ReducerTutorial = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default ReducerTutorial;
