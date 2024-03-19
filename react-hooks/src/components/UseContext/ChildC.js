import React, { useContext } from "react";
import { data, data1 } from "./ContextTutorial";

const ChildC = () => {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>
        hi my name is {name} and my gender is {gender}
      </h1>
    </>
  );
};

export default ChildC;
