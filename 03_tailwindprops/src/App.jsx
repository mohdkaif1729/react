import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from './components/Navbar.jsx'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-slate-700 text-slate-50 p-4 rounded-xl">
        Tailwind test
      </h1>
      <Navbar li1="Home" li2="About" li3="Contact" />
      
    </>
  );
}

export default App;
