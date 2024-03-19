import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "../src/components/UseState/StateTutorial";
import EffectTutorial from "../src/components/UseEffect/EffectTutorial";
import ContextTutorial from "./components/UseContext/ContextTutorial";
import ReducerTutorial from "./components/UseReducer/ReducerTutorial";

function App() {
  return (
    <div>
      {/* <StateTutorial />; */}
      {/* <EffectTutorial /> */}
      {/* <ContextTutorial /> */}
      <ReducerTutorial />
    </div>
  );
}

export default App;
