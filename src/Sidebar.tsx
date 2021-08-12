import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Sidebar.css";
export const Sidebar = () => {
  const recentItem = (topic: string) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg"
          alt="background"
          className="sidebar__background"
        />
        <Avatar
          className="sidebar__avatar"
          src="https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
        />
        <h2>Goku Son</h2>
        <h4>goky.s@db7.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,784</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("youtube")}
        {recentItem("game")}
        {recentItem("elonmusk")}
      </div>
    </div>
  );
};
