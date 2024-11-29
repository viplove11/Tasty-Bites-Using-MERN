import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p className="footer-logo">Tasty Bite's</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum id
            nostrum voluptatum? Perferendis quas reprehenderit consectetur omnis
            eveniet cumque facere harum labore architecto, odit suscipit est
            sequi repellat natus explicabo.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" className="social-icon" />
            <img src={assets.linkedin_icon} alt="" className="social-icon" />
            <img src={assets.twitter_icon} alt="" className="social-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 91281-87901</li>
                <li>tastyBites@fooodie.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Tasty Bite's</p>
    </div>
  );
};

export default Footer;
