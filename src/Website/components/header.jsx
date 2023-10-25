import React, { useContext, useEffect, useState } from "react";
import ProfileImg from "../../assets/images/guy.png";
import { SidebarContext } from "../layout";
import {  useNavigate } from "react-router-dom";
// import { Dropdown, DropdownButton } from "react-bootstrap";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GoBell } from "react-icons/go";
// import { AiOutlineMail } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";
// import { RxCross1 } from "react-icons/rx";
import { CgMenuLeft } from "react-icons/cg";
import { ROUTES } from "../../../utils/routes";
import logoImg from "../../assets/images/official_logo.png";
import SearchBar from "./searchBar";
// import AuthService from '../../----services/auth.service';
import { generalApi } from "../../services/generalApis/profile";

export const Header = (props) => {
  const navigate = useNavigate();
  const { getUserDetail } = generalApi();
  const [userDetails, setUserDetails] = useState({
    firstname:"",
    lastname:""
  });

  const getUserDetails = async () => {
    try {
      const response = await getUserDetail();
      setUserDetails({
        firstname: response.data.firstname,
        lastname: response.data.lastname
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { sideBar, setSideBar } = useContext(SidebarContext);
  // const {userLogout } = AuthService();

  // useEffect(() => {
  //   console.log(sideBar, 'sidebarHeader');
  // }, [sideBar])

  return (
    <React.Fragment>
      <header>
        <div className="headerInner">
          <button
            className="menuButton"
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <CgMenuLeft />
          </button>

          <div className="logoImage">
            <img src={logoImg} alt="" />
          </div>

          {/* <div className="searchBarHeader desktopSearch">
            <CiSearch className='searchIcon'/>
            <input type="text" name="" placeholder='Seach' id="" />
            <RxCross1 className='crossIcon'/>
          </div> */}

          <div className="desktopSearch">
            <SearchBar />
          </div>

          <div className="navRight">
            <div className="dropdown profileDropDown">
              <button
                onClick={() => navigate(ROUTES.PROFILE)}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={ProfileImg} alt="" />
                <div className="notificationShow"></div>
              </button>
            </div>

            <div className="aboutDoctor">
              <p className="doctorName">{userDetails.firstname} {userDetails.lastname}</p>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
