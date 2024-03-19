// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

import React, { useMemo, useState } from "react";

const MemoTutorial = (props) => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  //   useMemo(() => {
  //     let i = 0;
  //     while (i < 20000000) i++;
  //     return counterOne % 2 === 0;
  //   }, [counterOne]);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={IncrementOne}>counterOne - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={IncrementTwo}>counterTwo - {counterTwo}</button>
    </div>
  );
};

export default MemoTutorial;
