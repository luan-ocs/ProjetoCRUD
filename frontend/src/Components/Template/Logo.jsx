import "./Logo.css";
import React from "react";
import logoimg from "../Assets/logo.png";
import { Link } from "react-router-dom";

const logo = (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logoimg} alt="logo" />
    </Link>
  </aside>
);
export default logo;
