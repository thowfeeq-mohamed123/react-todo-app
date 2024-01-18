import React from "react";
import { useLocation } from "react-router-dom";

function User() {
  const location = useLocation();
  return (
    <>
      <div className="Users-info">
        <h1>Welcome {location.state.login}</h1>
        <ol>
          <li>Name: {location.state.login}</li>
          <li>login Id: {location.state.node_id}</li>
          <li>Github URL: {location.state.url}</li>
          <li>Avatar URL: {location.state.avatar_url}</li>
          <li>Type: {location.state.type}</li>
        </ol>
      </div>
    </>
  );
}

export default User;
