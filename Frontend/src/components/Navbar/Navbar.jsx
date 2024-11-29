import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("about");
          }}
          className={menu === "about" ? "active" : ""}
        >
          Moblie App
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} className="search-icon" alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          {getTotalCartAmount() !== 0   ? <div className="dot"></div> : null}
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          sign in
        </button>
      </div>
    </div>
  );
};
