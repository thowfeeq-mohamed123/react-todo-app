import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.message}</h1>
      </>
    );
  }
}

export default Test;
