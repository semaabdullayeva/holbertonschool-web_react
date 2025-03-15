import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      const compName = WrappedComponent.name || "Component";
      console.log(`Component ${compName} is mounted`);
    }

    componentWillUnmount() {
      const compName = WrappedComponent.name || "Component";
      console.log(`Component ${compName} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  const compName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithLoggingComponent.displayName = `WithLogging(${compName})`;

  return WithLoggingComponent;
};

export default WithLogging;
