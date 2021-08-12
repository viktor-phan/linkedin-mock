import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./HeaderOption.css";
interface MyProps extends React.HTMLAttributes<HTMLElement> {
  Icon?: any;
  title: string;
  avatar?: any;
  onClick?: any;
}
export const HeaderOption = ({ avatar, Icon, title, onClick }: MyProps) => {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__avatar" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};
