import React from "react";
import "./Navigation.css";
export const Navigation = () => {
  return (
    <nav className="global_container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button type="button" className="btn btn-danger">
        LOGIN
      </button>
    </nav>
  );
};
