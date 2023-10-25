import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./styles.css";
import Logo from "../../../assets/images/Untitled-2.png";

import Scope from "../../../assets/images/Scope.svg";
import ChannelExp from "../../../assets/images/ChannelExp.svg";
import TokenService from "../../../services/tokenService";
import {ROUTES} from "../../../../utils/routes" 

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [cPass,setCPass] = useState("")
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
    if(password !== cPass) {
      enqueueSnackbar("Passwords do not match", {
        variant: "error",
        autoHideDuration: 2000,
      });
      return
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
        TokenService().updateToken(data.idToken);
        navigate("/dashboard");
        enqueueSnackbar("User created successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else {
        enqueueSnackbar("Invalid credentials", {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (

    <>
      <div className="signUpMain">
        <div className="signUpImageContainer">
          <div className="experienceBox">
            <img src={Scope} alt="Scope" />
            <p className="topNotchpara">
              More and more, customers move across all channels—in person,
              online, and beyond—to get what they want
            </p>
          </div>
          <img src={ChannelExp} alt="exp" className="ScopeImg" />
        </div>

        <div className="leftContainer">
          <div className="logoBox">
            <img src={Logo} alt="owl" />
          </div>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Get Started
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#7E7E7E",
              fontSize: "15.035px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "10.9px",
            }}
          >
            Getting started is easy
          </p>

          <form onSubmit={handleSubmit} className="formBox">
            <input
              // type="email"
              className="form-control"
              // value={credentials.email}
              onChange={() => {}}
              // id="email"
              // name="email"
              // aria-describedby="emailHelp"
              placeholder="Full Name"
              style={{
                height: "55px",
              }}
            />
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              style={{
                height: "55px",
              }}
            />
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
              placeholder="Password"
              style={{
                height: "55px",
              }}
            />
            <input
              type="password"
              className="form-control"
              value={cPass}
              onChange={(e) => {
                setCPass(e.target.value)
              }}
              name="password"
              id="password"
              placeholder="Confirm password"
              style={{
                height: "55px",
              }}
            />
            <button type="submit" className="signUpBtn">
              Create Account
            </button>
            <div className="noAccBox">
              have an account?{" "}
              <span>
                <Link
                  to={ROUTES.LOGIN}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      color: "#0B2360",
                      fontWeight: "700",
                    }}
                  >
                    Login
                  </p>
                </Link>
              </span>
            </div>
            <p className="termOfUse">
              By continuing you indicate that you read and agreed to the Terms
              of Use
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
