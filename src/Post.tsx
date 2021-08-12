import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { InputOption } from "./InputOption";
import "./Post.css";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutIcon from "@material-ui/icons/ChatOutlined";
import ShareOutIcon from "@material-ui/icons/ShareOutlined";
import SendOutIcon from "@material-ui/icons/SendOutlined";
interface postProps extends React.HtmlHTMLAttributes<HTMLElement> {
  name: string;
  description: string;
  message: string;
  photoURL: string;
}

export const Post = ({ name, description, message, photoURL }: postProps) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoURL} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={LikeIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};
