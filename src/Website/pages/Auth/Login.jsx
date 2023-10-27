import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import TokenService from "../../../services/tokenService";
import Logo from "../../../assets/images/Untitled-2.png";
import "./styles.css";
import Form from "react-bootstrap/Form";
import thumbsUp from "../../../assets/images/thumbsUp.svg";
import { ROUTES } from "../../../../utils/routes";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const checkUserRole = async () => {
    try {
      const { token } = TokenService();
      const response = await axios.get("http://54.210.253.228/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("role", response.data.data.role);
      localStorage.setItem("senderExtension", response.data.data.extension);
      if (response.data.role === "agent") {
        navigate(ROUTES.DASHBOARD_AGENT);
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      } else if (response.data.role === "admin") {
        navigate(ROUTES.DASHBOARD_ADMIN);
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const [showLoginAsCustomer, setShowLoginAsCustomer] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (!email || !password) {
      enqueueSnackbar("Please fill in both email and password fields", {
        variant: "error",
        autoHideDuration: 2000,
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
        TokenService().updateToken(data.idToken);
        localStorage.setItem("password", password);
        localStorage.setItem("fid", data.localId);
        checkUserRole().then(() => {
          const userRole = localStorage.getItem("role");
          if (userRole === "user") {
            setShowLoginAsCustomer(true);
          }
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
      console.log(error, "error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const [clientCode, setClientCode] = useState("");
  const loginAsCustomer = async (e) => {
    e.preventDefault();
    if (!clientCode) {
      enqueueSnackbar("Please fill in the client code", {
        variant: "error",
        autoHideDuration: 2000,
      });
      return;
    }
    const fid = localStorage.getItem("fid");
    try {
      const response = await axios.post(
        "http://54.210.253.228/api/auth/signin/customer",
        {
          fid: fid,
          clientCode: clientCode,
        }
      );
      console.log("res", response.data);
      const data = response.data;
      const role = localStorage.getItem("role");
      if (data.message === "Success") {
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
        if (role === "user") {
          navigate(ROUTES.DASHBOARD);
        }
      }
    } catch (error) {
      enqueueSnackbar("An error occurred", {
        variant: "error",
        autoHideDuration: 2000,
      });
      console.log(error, "error");
    }
  };

  return (
    <>
      <div className="mainBox">
        <div className="leftContainer">
          <div className="logoBox">
            <img
              src={Logo}
              alt="owl"
              style={{
                width: "300px",
              }}
            />
          </div>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            {showLoginAsCustomer === true
              ? "Login as customer"
              : "Welcome Back"}
          </h2>
          {/* <p
            style={{
              textAlign: "center",
            }}
          >
            Login to your account
          </p> */}
          {showLoginAsCustomer === false ? (
            <form onSubmit={handleSubmit} className="formBox">
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
              <div className="recoverPasswordWrap">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Remeber me"
                  className="switchLabel"
                />
                <p className="recoverPass">Forget password</p>
              </div>
              <button type="submit" className="loginBtn">
                Login
              </button>
              {/* <div className="noAccBox">
                        Do not have an account?{" "}
                        <span>
                          <Link
                            to={ROUTES.SIGNUP}
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
                              Signup
                            </p>
                          </Link>
                        </span>
                      </div> */}
            </form>
          ) : (
            <form onSubmit={loginAsCustomer} className="formBox">
              <input
                // type="number"
                className="form-control"
                value={clientCode}
                onChange={(e) => {
                  setClientCode(e.target.value);
                }}
                // id="email"
                // name="email"
                // aria-describedby="emailHelp"
                placeholder="Enter Client Code received in your email"
                style={{
                  height: "55px",
                }}
              />
              <button type="submit" className="loginBtn">
                Proceed
              </button>
            </form>
          )}
        </div>
        <div className="rightContainer">
          <div className="resourceBox">
            <div className="resourceBtn">
              <img src={thumbsUp} alt="thumbsUp" />
              <p>Top Notch Resources</p>
            </div>
            <p className="topNotchpara">
              Today, we create innovative solutions to the challenges that
              consumers face in both their everyday lives and events.Today, we
              create innovative solutions to the challenges that consumers face
              in both their everyday lives and events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
