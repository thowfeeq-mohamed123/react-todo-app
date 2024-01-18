import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { AuthContext } from "../../Contexts";

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
    </div>
  );
}

export default Dashboard;
