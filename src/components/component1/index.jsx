import React from "react";
import withMouseActions from "../withMouseActions";

const Component1 = ({ color, onMouseEnter, onMouseLeave,name }) => (
  <div>
    <h1
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ color: color }}
    >
      Component 1: name is {name}
    </h1>
  </div>
);

export default withMouseActions(Component1, "red");
