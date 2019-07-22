import React from "react";
import Component1 from "./components/component1.jsx";
import Component2 from "./components/component2.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
