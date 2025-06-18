import "./App.css";
import FetchData from "./HooksByWDM/useEffect/Counter";
// import Counter from "./HooksByWDM/useState/Counter";

function App() {
  return (
    <>
      <div>Hi, world!!!</div>
      {/* <Counter /> */}
      <FetchData />
    </>
  );
}

export default App;
