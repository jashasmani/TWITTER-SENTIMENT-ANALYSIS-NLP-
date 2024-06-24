import React from "react";
import "./Header.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Header = ({ profileImage, username, location }) => {
  return (
    <div className="header">
      <div className="profile-image">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div className="user-info">
        <h3 className="username">{username}</h3>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default Header;
