import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowLogin(false);
            }}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="" placeholder="Enter Name" id="" />
          )}
          <input type="email" name="" placeholder="Enter Email" id="" />
          <input type="password" name="" placeholder="Enter Password" id="" />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>I agree to Terms & Conditions.</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create an Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
