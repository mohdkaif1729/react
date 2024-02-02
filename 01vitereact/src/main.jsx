import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   );
// }

// const anotherElement = <a href="https://google.com">visit google</a>;

const anoteruser = 'chai aur react'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank'
  },
  'click me to visit google',
  anoteruser
)

ReactDOM.createRoot(document.getElementById("root")).
render(
  reactElement
  
);
