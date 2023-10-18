// import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
// import {LiaEdit, LiaListAltSolid} from 'react-icons/lia'
import { BsQuestionCircle } from "react-icons/bs";
// import {GoHome} from 'react-icons/go'
import { LuLogOut } from "react-icons/lu";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { ROUTES } from "../../../utils/routes";

export const Footer = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role")
  };
  return (
    <footer className="footer2">
      <div className="footer">
        <Link to={ROUTES.PROFILE}>
          <AiOutlineUser />
        </Link>
        <Link to={ROUTES.SETTINGS}>
          <IoSettingsOutline />
        </Link>
        <Link>
          <BsQuestionCircle />
        </Link>
        <Link to={ROUTES.LOGIN} onClick={handleLogout}>
          <LuLogOut />
        </Link>
        <Link to={ROUTES.NOTIFICATION}>
          <IoNotificationsOutline />
        </Link>
      </div>
    </footer>
  );
};
