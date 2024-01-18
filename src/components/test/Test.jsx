import React from "react";

class Test extends React.Component {
  render() {
    function success() {
      alert("success");
    }
    return (
      <>
        <h1 onClick={success}>Success</h1>
      </>
    );
  }
}

export default Test;
