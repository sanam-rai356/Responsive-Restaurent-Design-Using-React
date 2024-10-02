import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer_icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>

        <div className="footer_link">
          <AnchorLink className="anchorLink" href="#home">
            Home
          </AnchorLink>
          <AnchorLink className="anchorLink" offset={50} href="#about">
            About
          </AnchorLink>
          <AnchorLink className="anchorLink" offset={50} href="#menu">
            Menu
          </AnchorLink>
          <AnchorLink className="anchorLink" offset={50} href="#product">
            Products
          </AnchorLink>
          <AnchorLink className="anchorLink" offset={50} href="#blog">
            Blog
          </AnchorLink>
          <AnchorLink className="anchorLink" offset={50} href="#contact">
            Contact
          </AnchorLink>
        </div>

        <div className="footer_p">
            <p>created by Coding circulate | all rights reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
