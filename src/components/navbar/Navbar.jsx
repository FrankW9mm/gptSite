import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#Aifeatures">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
      <p>
        <a href="#blog">Sign In</a>
      </p>
      <button className="mobile_sign">Sign up</button>
    </>
  );
};
const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="app__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#Aifeatures">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>

      <div className="app__navbar-sign">
        <p>Sign in</p>
        <button className="signup_btn">Sign up</button>
      </div>
      <div className="app__navbar-menu">
        {Toggle ? (
          <RiCloseLine className="Ri_btn" onClick={() => setToggle(!Toggle)} />
        ) : (
          <RiMenu3Line className="Ri_btn" onClick={() => setToggle(!Toggle)} />
        )}

        {Toggle && (
          <div className="app__navbar-menu_container scale-up-center">
            <div className="app__navbar-menu_container-links">
              <Menu />
              <div className="app__navbar-sign-mobile">
                <p>Sign in</p>
                <button className="signup_btn">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
