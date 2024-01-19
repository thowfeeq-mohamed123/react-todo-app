import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../Contexts";
// import Test from "../test/Test";

function Dashboard() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  console.log(context);

  useEffect(() => {
    setTimeout(() => {
      navigate("/signup");
      // navigate("/test");
    }, 2000);
  }, []);

  return (
    <div className="Auth-form-container">
      <h1>Welcome to Dashboard</h1>
      {/* <Test message="Hello" /> */}
    </div>
  );
}

export default Dashboard;
