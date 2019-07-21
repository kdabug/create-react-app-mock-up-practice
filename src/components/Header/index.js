import "./style.css";
import React from "react";

export const Header = () => {
  return (
    <div className="c-header__container">
      <h1> Blog</h1>
      <ul>
        <li>Home</li>
        <li>Posts</li>
        <li>About</li>
      </ul>
    </div>
  );
};
