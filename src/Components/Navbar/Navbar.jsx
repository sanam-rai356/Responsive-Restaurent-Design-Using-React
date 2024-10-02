import React, { useRef } from "react";
import Logo from "./../../images/logo.png";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const NavToggleRef = useRef();
  const NavbarToggle = () => {
    NavToggleRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="Logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="navbar">
          <ul className="main_ul" ref={NavToggleRef}>
            <li>
              <AnchorLink className="anchorLink" href="#home">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" offset={50} href="#about">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" offset={50} href="#menu">
                Menu
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" offset={50} href="#product">
                Products
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" offset={50} href="#blog">
                Blog
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" offset={50} href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>

        <div className="bar">
          <i className="fa-solid fa-bars" onClick={NavbarToggle}></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
