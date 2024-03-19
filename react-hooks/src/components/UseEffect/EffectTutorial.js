// The useEffect Hook allows you to perform side effects in your components.

// Some examples of side effects are: fetching data, directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument is optional.

// useEffect(<function>, <dependency>)

import React, { useEffect, useState } from "react";

const EffectTutorial = () => {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState("Ram");
  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  const updateCount = () => {
    setCounter(count + 1);
  };
  const updateData = () => {
    setData("Seeta");
  };
  return (
    <div>
      <h1>Button clicked {count} times</h1>
      <button onClick={updateCount}>Click</button>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default EffectTutorial;
