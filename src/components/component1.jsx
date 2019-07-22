import React from "react";
import withMouseActions from "./withMouseActions.jsx";

const Component1 = ({ color, changeColor, restoreColor }) => (
  <h1 style={{ color }} onMouseEnter={changeColor} onMouseLeave={restoreColor}>
    Component 1
  </h1>
);

// Wrapping the component inside the HOC to give it access to the logic(as props)
export default withMouseActions(Component1, "blue");
