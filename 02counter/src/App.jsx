import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default App;
