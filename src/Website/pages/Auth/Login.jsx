import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import TokenService from "../../../services/tokenService";
import Logo from "../../../assets/images/Logo.svg";
import Google from "../../../assets/images/google 1.svg";
import Facebook from "../../../assets/images/facebook 1.svg";
import "./styles.css";
import Form from "react-bootstrap/Form";
import thumbsUp from "../../../assets/images/thumbsUp.svg";
import {ROUTES} from "../../../../utils/routes" 
const Login = () => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const UserDetail = async() =>{
    try{
      const {token} = TokenService();
      const response = await axios.get("http://54.210.253.228/api/user/me",{
        headers: {
          Authorization: `Bearer ${token}`
      }
      })
      localStorage.setItem("role",response.data.role)
      if(response.data.role==="agent"){
        navigate(ROUTES.DASHBOARD_AGENT)
      }
      if(response.data.role==="admin"){
        navigate(ROUTES.DASHBOARD_ADMIN)
      }
      if(response.data.role==="user"){
        navigate(ROUTES.DASHBOARD)
      }
    }
    catch(err){
      console.log("error",err)
    }
  }

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
        TokenService().updateToken(data.idToken);
        enqueueSnackbar("Logged in successfully", {
          variant: "success",
          autoHideDuration: 2000,
        });
        UserDetail()
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

  return (
    <>
      <div className="mainBox">
        <div className="leftContainer">
          <div className="logoBox">
            <img src={Logo} alt="owl" />
          </div>
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Welcome Back
          </h2>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Login to your account
          </p>
          <div className="fbGoogleBtnWrap">
            <button className="iconBtn">
              <img src={Google} alt="Facebook" />
              <p
                style={{
                  marginBottom: 0,
                }}
              >
                Google
              </p>
            </button>
            <button className="iconBtn">
              <img src={Facebook} alt="Facebook" />
              <p
                style={{
                  marginBottom: 0,
                }}
              >
                Facebook
              </p>
            </button>
          </div>
          <div className="continueWith">
            <div
              style={{
                strokeWidth: "1px",
                stroke: "#DBDBDB",
              }}
            ></div>
            <p>or continue with</p>
            <div
              style={{
                strokeWidth: "1px",
                stroke: "#DBDBDB",
              }}
            ></div>
          </div>
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
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Remeber me"
                  className="switchLabel"
                />
              </Form>
              <p className="recoverPass" >Recover password</p>
            </div>
            <button type="submit" className="loginBtn">
              Login
            </button>
            <div className="noAccBox">
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
            </div>
          </form>
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
