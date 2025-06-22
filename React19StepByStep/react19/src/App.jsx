import { useState } from "react";
import "./App.css";
import Condition from "./conditionEx1/Condition";
import Example1 from "./HooksByWDM/useLayoutEffect/Example1";
import PropsEx1 from "./propsExamples/PropsEx1";
function App() {
  const [propOne, setPropOne] = useState(5)
  return (
    <>
      <div>Hi, world!!!</div>
      <div>{propOne}</div>
      <button onClick={()=>setPropOne(propOne * 4)}>hit btn</button>
      <PropsEx1 propVal={propOne} age={ 51} />
    </>
  );
}

export default App;
