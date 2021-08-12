import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import { HeaderOption } from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationIcon from "@material-ui/icons/Notifications";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
export const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logout());
    auth.signOut();
    console.log("Loggout");
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.seekpng.com/png/detail/30-301979_logo-for-website-linkedin-logo-vector-free-download.png"
          alt="logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notification" Icon={NotificationIcon} />
        <HeaderOption
          avatar="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
          title="Goku"
          onClick={logoutApp}
        />
      </div>
    </div>
  );
};
