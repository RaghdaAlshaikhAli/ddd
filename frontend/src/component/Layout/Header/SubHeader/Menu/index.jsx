import React from "react";
import { Link } from "react-router-dom";
const Menu = (country) => {
  console.log(country.country);
  return (
    <div className={`settings-menu ${country.country}`}>
      <div className="setting-menu-inner">
        <div className="setting-links">
          <Link to="/dashboard">Gategory name</Link>
        </div>
        <div className="setting-links">
          <Link to="/">Gategory name</Link>
        </div>
        <div className="setting-links">
          <Link to="/">Gategory name</Link>
        </div>
        <div className="setting-links">
          <Link to="/">Gategory name</Link>
        </div>
        <div className="setting-links">
          <Link to="/">Gategory name</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
