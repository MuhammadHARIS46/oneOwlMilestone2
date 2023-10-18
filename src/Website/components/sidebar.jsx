import { useContext, useEffect, useState } from "react";
// import logoImg from '../../assets/images/logo/Logo.png'
import { SidebarContext } from "../layout";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { PiArrowSquareDown, PiTruckLight } from "react-icons/pi";
import { LiaEdit, LiaListAltSolid } from "react-icons/lia";
import { BsQuestionCircle } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { HiOutlineClipboardDocument } from "react-icons/hi2";
// import { LiaUserSlashSolid } from "react-icons/lia";
import {
  AiOutlineClose,
  //   AiOutlineFolderAdd,
  AiOutlineUser,
} from "react-icons/ai";
// import { GiHospitalCross } from "react-icons/gi";
// import { RiHospitalLine } from "react-icons/ri";
// import { CgFileDocument } from "react-icons/cg";
// import {
//   MdOutlineAdminPanelSettings,
//   MdOutlineManageAccounts,
// } from "react-icons/md";
// import { FiUsers } from "react-icons/fi";
// import { FiSettings } from "react-icons/fi";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import { ROUTES } from "../../../utils/routes";

export const Sidebar = () => {
  const { sideBar, setSideBar } = useContext(SidebarContext);
  const navigate = useNavigate();
  const closeButton = () => {
    setSideBar(!sideBar);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileButton = () => {
    if (screenWidth < 1200) {
      setSideBar(!sideBar);
    }
  };
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // State to control the visibility of the logout modal
  5;

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  // Function to close the logout modal
  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };
  const handleLogout = () => {
    setIsLogoutModalOpen(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate(ROUTES.LOGIN);
  };
  const role = localStorage.getItem("role");
  return (
    <>
      <aside id="sidebar" className={sideBar ? "sidebarwidth" : "sidebar"}>
        <div className="sideBarInner">
          <div className="aSideCloseButton">
            <button onClick={closeButton}>
              <RxCross2 />
            </button>
          </div>
          <ul className="sidebar-nav" id="sidebar-nav">
            {/* AGENT MENUS  */}
            {role === "agent" && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.DASHBOARD_AGENT}
                    onClick={closeMobileButton}
                  >
                    <GoHome className="sideIcon" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.SERVICE}
                    onClick={closeMobileButton}
                  >
                    <PiArrowSquareDown className="sideIcon" />
                    <span>Service</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.PERFORMANCE}
                    onClick={closeMobileButton}
                  >
                    <LiaEdit className="sideIcon" />
                    <span>Performance</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.COMPLIANCE}
                    onClick={closeMobileButton}
                  >
                    <LiaListAltSolid className="sideIcon" />
                    <span>Complliance</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.WORKFLOW}
                    onClick={closeMobileButton}
                  >
                    <PiTruckLight className="sideIcon" />
                    <span>Workflow</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* CUSTOMER MENUS  */}
            {role === "user" && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.DASHBOARD}
                    onClick={closeMobileButton}
                  >
                    <GoHome className="sideIcon" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.COMMUNICATION}
                    onClick={closeMobileButton}
                  >
                    <PiArrowSquareDown className="sideIcon" />
                    <span>Communication</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.PREFERENCE}
                    onClick={closeMobileButton}
                  >
                    <LiaEdit className="sideIcon" />
                    <span>Preference</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.BILLING}
                    onClick={closeMobileButton}
                  >
                    <LiaListAltSolid className="sideIcon" />
                    <span>Billing</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* ADMIN MENU  */}
            {role === "admin" && (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.DASHBOARD_ADMIN}
                    onClick={closeMobileButton}
                  >
                    <AiOutlineUser className="sideIcon" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.USER_MANAGEMENT}
                    onClick={closeMobileButton}
                  >
                    <PiArrowSquareDown className="sideIcon" />
                    <span>Management</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.CHANNELS}
                    onClick={closeMobileButton}
                  >
                    <LiaEdit className="sideIcon" />
                    <span>Channels</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.ADMINCOMPLIANCE}
                  >
                    <LiaListAltSolid className="sideIcon" />
                    <span>Compliance</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link  collapsed"
                    activeclassname="active"
                    to={ROUTES.PRIVACY}
                  >
                    <PiTruckLight className="sideIcon" />
                    <span>Data Privacy</span>
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link  collapsed"
                activeclassname="active"
                to={ROUTES.PROFILE}
                onClick={closeMobileButton}
              >
                <AiOutlineUser className="sideIcon" />
                <span>Profile</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link  collapsed"
                activeclassname="active"
                to={ROUTES.NOTIFICATION}
                onClick={closeMobileButton}
              >
                <IoNotificationsOutline className="sideIcon" />
                <span>Notification</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link  collapsed"
                activeclassname="active"
                to={ROUTES.SETTINGS}
                onClick={closeMobileButton}
              >
                <IoSettingsOutline className="sideIcon" />
                <span>Settings</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link  collapsed"
                activeclassname="active"
                to={ROUTES.FAQ}
              >
                <BsQuestionCircle className="sideIcon" />
                <span>FAQ</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="nav-link  collapsed"
                activeclassname="active"
                onClick={openLogoutModal}
                style={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                <LuLogOut className="sideIcon" style={{ color: "#aa97b0" }} />
                <span style={{ color: "#aa97b0" }}>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {isLogoutModalOpen && (
        <dialog id="modalLogout" className="modalLogout" open>
          <div className="modalLogoutMain">
            <button className="modalLogoutButton" onClick={closeLogoutModal}>
              <AiOutlineClose />
            </button>
            <p>Are you sure you want to logout?</p>
            <div className="logoutButtons">
              <button className="yesButton" onClick={handleLogout}>
                Yes
              </button>
              <button className="NoButton" onClick={closeLogoutModal}>
                No
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};
