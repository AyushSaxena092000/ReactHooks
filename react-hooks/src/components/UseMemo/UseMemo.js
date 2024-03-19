import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("*************");
      return add * 10;
    },
    [add]
  );

  return (
    <div>
      <h1>Learning useMemo</h1>
      {multiplication}
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <br />
      <button onClick={() => setSub(sub - 1)}>Substraction</button>
      <span>{sub}</span>
    </div>
  );
};

export default UseMemo;
