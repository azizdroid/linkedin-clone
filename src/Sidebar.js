import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebar.css";
function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        {topic}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1020.9375&fit=crop&crop=faces"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Sabera Aziz</h2>
        <h4>saberaziz13@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">2,3044</p>{" "}
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you</p>

          <p className="sidebar__statnumber">2,3044</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Redux")}
        {recentItem("coding")}
      </div>
    </div>
  );
}

export default Sidebar;
