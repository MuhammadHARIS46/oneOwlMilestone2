import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import TokenService from "../../../services/tokenService";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (!email || !password) {
      enqueueSnackbar("Please fill in both email and password fields", {
        variant: "error",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF7PiEm_qN4tI63oTqLo8KjP0lsk7SjLk",
        {
          email: email,
          password: password,
          clientType: "CLIENT_TYPE_WEB",
          returnSecureToken: true,
        }
      );

      const data = response.data;

      if (data.idToken) {
        TokenService().updateToken(data.idToken); // Update the token using TokenService
        navigate("/dashboard");
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 3000,
        });
      } else {
        enqueueSnackbar("Invalid credentials", {
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred", {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.log(error, "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className=" container mt-2">
      <h2 className="my-3">Login to continue.</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          Do not have an account!{" "}
          <span>
            <Link to="/signup">Click here</Link>
          </span>{" "}
          to create one.
        </div>
      </form>
    </div>
  );
};

export default Login;
