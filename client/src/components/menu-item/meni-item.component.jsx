import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.style.scss";

const Menu = ({ title, size, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="font-weight-bold title">{title.toUpperCase()}</h1>
        <span className="font-weight-bold subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

//withRouter is a higher order component.
export default withRouter(Menu);
