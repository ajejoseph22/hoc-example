import React from "react";

//HIGHER-ORDER COMPONENT
const withMouseActions = (WrappedComponent, color) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: color
      };
    }

    changeColor = () => {
      this.setState({ color: "pink" });
    };

    restoreColor = () => {
      this.setState({ color: color });
    };

    render() {
      return (
        <WrappedComponent
          color={this.state.color}
          changeColor={this.changeColor}
          restoreColor={this.restoreColor}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withMouseActions;
