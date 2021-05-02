import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search" type="text"></input>
      </div>
      <div className="header_right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messages" Icon={MessageIcon} />

        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          avatar="https://www.w3schools.com/howto/img_avatar2.png"
          title="Me"
        ></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
