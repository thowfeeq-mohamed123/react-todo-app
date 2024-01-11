import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const initialProfile = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialProfile);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function userLogin() {
    toast.success("Login successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate("/users");
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={userLogin}
            >
              Submit
            </button>
            <ToastContainer />
          </div>
          <p className="forgot-password text-right mt-2">Forgot password?</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
