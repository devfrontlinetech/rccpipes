import React, { useState, useEffect } from "react";
import "../../../assets/css/layouts/header.css";
import logo from "../../../assets/images/logo/logo-04.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "#home" },
    // { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Products", link: "#products" },
    { id: 4, name: "Industries", link: "#industries" },
    { id: 5, name: "Projects", link: "#projects" },
    { id: 6, name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    const section = document.querySelector(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`concretepipe-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="concretepipe-navbar">
        <div className="concretepipe-logo">
          <img
            onClick={() =>
              document.querySelector("#home").scrollIntoView({
                behavior: "smooth",
              })
            }
            src={logo}
            alt="Concrete Pipe Logo"
            className="concretepipe-logo-img"
          />

          <div className="concretepipe-location">
            <div className="location-row">
              <FaMapMarkerAlt className="location-icon" />
              <span>Chennai, Tamil Nadu</span>
            </div>

            <div className="location-row">
              <FiPhoneCall className="phone-icon" />
              <span>+91  94865 44451</span>
            </div>
          </div>
        </div>

        {/* <div
          className={`concretepipe-hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div> */}

        {/* Navigation */}
        <ul className={`concretepipe-nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                className="concretepipe-nav-link-btn"
                onClick={() => handleClick(item.link)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
