import React, { Component } from "react";

//HIGHER-ORDER COMPONENT
const withMouseActions = (WrappedComponent, color) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { color: color };
    }

    onMouseEnter = () => {
      this.setState({ color: "pink" });
    };

    onMouseLeave = () => {
      this.setState({ color: color });
    };
    render() {
      return (
        <WrappedComponent
          color={this.state.color}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};

export default withMouseActions;
