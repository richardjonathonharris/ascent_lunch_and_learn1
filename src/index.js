import React from "react";
import ReactDOM from "react-dom";
import Fullname from "./components/Fullname";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>AHHHH CodeSandbox</h1>
      <h2>Start screaming to see some AHHHHH happen!</h2>
      <h1>
        <Fullname firstName="AHHHH SCREAMING" lastName="SO MUCH SCREAMING" />
      </h1>
      <h3>ABOVE IS MY FULL NAME FUNCTION!</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
