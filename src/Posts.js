import React, { useState, forwardRef } from "react";
import "./posts.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Feed from "./Feed";
const Posts = forwardRef(({ name, description, message, url }, ref) => {
  return (
    <div ref={ref} className="posts">
      <div className="posts_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpIcon} title="Like"></InputOption>
        <InputOption Icon={ChatOutlinedIcon} title="Comment"></InputOption>
        <InputOption Icon={ShareOutlinedIcon} title="Share"></InputOption>
        <InputOption Icon={SendOutlinedIcon} title="Send"></InputOption>
      </div>
    </div>
  );
});

export default Posts;
