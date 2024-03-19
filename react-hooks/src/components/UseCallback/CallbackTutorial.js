// The React useCallback Hook returns a memoized callback function.

// Think of memoization as caching a value so that it does not need to be recalculated.

import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

const CallbackTutorial = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    // some operation
  }, [count]);

  return (
    <div className="App">
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>Count</button>
    </div>
  );
};

export default CallbackTutorial;
