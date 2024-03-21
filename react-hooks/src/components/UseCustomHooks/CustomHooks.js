// Hooks are reusable functions.

// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

// Custom Hooks start with "use". Example: useFetch.

// Custom hooks in React are JavaScript functions that allow you to extract and reuse logic across multiple components in a React application. They enable you to encapsulate logic into reusable functions, making your code more modular and easier to maintain.

import React from "react";
import useCounter from "./useCounter";

const CustomHooks = () => {
  const [count, Increment, Decrement] = useCounter();
  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default CustomHooks;
