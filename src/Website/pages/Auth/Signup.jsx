import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const Signup = () => {
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF7PiEm_qN4tI63oTqLo8KjP0lsk7SjLk",
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      const data = response.data;

      if (data.idToken) {
        localStorage.setItem("token", data.idToken);
        navigate("/dashboard");
        enqueueSnackbar("User created successfully", {
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
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-2">
      <h2 className="my-3">Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            placeholder="Password"
            minLength={5}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            marginTop: "10px",
          }}
        >
          Submit
        </button>
        <div>
          Already have an account!{" "}
          <span>
            <Link to="/login">Click here</Link>
          </span>{" "}
          to login.
        </div>
      </form>
    </div>
  );
};

export default Signup;
