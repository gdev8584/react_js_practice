import './App.css';
import AlertClick from './Components/AlertClick';
import ClassComp from './Components/ClassComp';
import Click from './Components/ClassClick';
import FunctionClick from './Components/FunctionClick';
import FunctionComp from './Components/FunctionalComp';
import HoverCount from './Components/HoverCount';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FunctionComp />
      <ClassComp />
      <Click />
      <FunctionClick />
      <AlertClick />
      <HoverCount />
    </div>
  );
}

export default App;
