import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <Link to="/">
          <div className="gpt3__navbar-links__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="gpt3__navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <Link to="/sign-in">
          <p>Sign in</p>
        </Link>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu__container scale-up-center">
            <div className="gpt3__navbar-menu__container-links">
              <Menu />
              <div className="gpt3__navbar-menu__container-links-sign">
                <Link to="/sign-in">
                  <p>Sign in</p>
                </Link>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
