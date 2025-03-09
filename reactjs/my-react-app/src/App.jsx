import "./App.css";
import EvenetHandling from "./components/basic/EventHandling";
import HelloWorld from "./components/basic/HelloWord";
import PropsJs from "./components/basic/PropsJs";
import StateManagement from "./components/basic/StateManagement";
import StateArray from "./components/stateManagement/StateArray";
import StateObject from "./components/stateManagement/StateObject";
import UseEffectjs from "./components/stateManagement/UseEffectJs";


function App() {
  return (
    <div>
      <HelloWorld />
      <PropsJs nama="Nanonano" />
      <PropsJs nama="Keti" />
      <StateManagement />
      <EvenetHandling />
      <StateArray />
      <StateObject />
      <UseEffectjs />
    </div>
  );
}

export default App;
