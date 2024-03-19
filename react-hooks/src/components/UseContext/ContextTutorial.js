// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

import React, { createContext } from "react";
import ChildA from "./ChildA";

// create, provider, useContext

const data = createContext();
const data1 = createContext();

const ContextTutorial = () => {
  const name = "Ayush";
  const gender = "Male";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
};

export default ContextTutorial;

export { data, data1 };
