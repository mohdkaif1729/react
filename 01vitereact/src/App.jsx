import Navbar from "./components/Navbar";

function App() {
  const username = "chai aur code";
  return (// not use if condition in curly braces
    <>
      <Navbar /> // evaluate expression i.e final result / outcome 
      <p>chai aur code <strong>{username}</strong></p>
    </>
  );
}
export default App;
