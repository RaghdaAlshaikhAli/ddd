import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const MenuTop = () => {
  return (
    <div className="settings-menu">
      <div className="setting-links">
        <Link to="/profile">Profile</Link>
      </div>
      <div className="setting-links">
        <Link to="/">Home</Link>
      </div>
      <div className="setting-links">
        <Link to="/seller">Become a seller </Link>
      </div>
      <div className="setting-links">
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default MenuTop;
