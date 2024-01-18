import React from "react";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  return (
    <>
      <div className="Users-info">
        <h1>Welcome {location.state.login}</h1>
      </div>
    </>
  );
}

export default User;
