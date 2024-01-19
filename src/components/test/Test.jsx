import React from "react";

class Test extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    function success() {
      alert("success");
    }
    return (
      <>
        {/* <h1 onClick={success}>{this.props.message}</h1> */}
        <h1 onClick={success}>Hello</h1>
      </>
    );
  }
}

export default Test;
