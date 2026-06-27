import React from "react";
import "../../../assets/css/layouts/footer.css";
import logo from "../../../assets/images/logo/logo-03.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#industries" },
    { id: 3, name: "Products", link: "#products" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  const productLinks = [
    { id: 1, name: "RCC Concrete Pipes", link: "#products" },
    { id: 2, name: "NP2 Pipes", link: "#products" },
    { id: 3, name: "NP3 Pipes", link: "#products" },
    { id: 4, name: "Drainage Pipes", link: "#products" },
  ];

  const socialIcons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaLinkedinIn /> },
    { id: 4, icon: <FaInstagram /> },
  ];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about">
            <img src={logo} alt="Company Logo" className="footer-logo" />

            <p>
              We manufacture high quality concrete pipes used for drainage,
              infrastructure and large construction projects across India.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.id} onClick={() => scrollToSection(item.link)}>
                  <FaAngleRight className="footer-link-icon" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Products</h4>

            <ul>
              {productLinks.map((item) => (
                <li key={item.id} onClick={() => scrollToSection(item.link)}>
                  <FaAngleRight className="footer-link-icon" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>

            <p>
              <FaMapMarkerAlt className="contact-icon" />
              Chennai, Tamil Nadu
            </p>

            <p>
              <FaPhoneAlt className="contact-icon" />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope className="contact-icon" />
              info@concretepipes.com
            </p>
          </div>
        </div>

        <div className="footer-register">
          <p>Register for discount</p>

          <button
            className="signup-btn"
            onClick={() => scrollToSection("#contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-bottom">
            <p>
              Copyright {new Date().getFullYear()} CorePipe Designed By{" "}
              <a
                href="https://frontlinetechnologies.org/"
                rel="noreferrer"
                target="_blank"
              >
                Frontline Technologies
              </a>
              &nbsp;All Rights Reserved
            </p>
          </div>

          <div className="footer-social">
            {socialIcons.map((item) => (
              <span key={item.id} className="social-icon">
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
