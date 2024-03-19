import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "../src/components/UseState/StateTutorial";
import EffectTutorial from "../src/components/UseEffect/EffectTutorial";
import ContextTutorial from "./components/UseContext/ContextTutorial";

function App() {
  return (
    <div>
      {/* <StateTutorial />; */}
      {/* <EffectTutorial /> */}
      <ContextTutorial />
    </div>
  );
}

export default App;
