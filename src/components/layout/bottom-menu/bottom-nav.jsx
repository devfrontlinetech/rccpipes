import React, { useState } from "react";
import "../../../assets/css/layouts/bottom-nav.css";

import {
  FaHome,
  FaBoxOpen,
  FaIndustry,
  FaProjectDiagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes
} from "react-icons/fa";

function Bottomnav({ onMenuClick }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-radial-section">
      <div className={`corepipe-radial-menu ${open ? "active" : ""}`}>

        {/* Center Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <button className="menu-item item1" onClick={() => onMenuClick("home")}>
          <FaHome />
          {/* <span>Home</span> */}
        </button>

        <button className="menu-item item2" onClick={() => onMenuClick("products")}>
          <FaBoxOpen />
          {/* <span>Products</span> */}
        </button>

        <button className="menu-item item3" onClick={() => onMenuClick("industries")}>
          <FaIndustry />
          {/* <span>Services</span> */}
        </button>

        <button className="menu-item item4" onClick={() => onMenuClick("projects")}>
          <FaProjectDiagram />
          {/* <span>Gallery</span> */}
        </button>

        <button className="menu-item item5" onClick={() => onMenuClick("contact")}>
          <FaPhoneAlt />
          {/* <span>Quote</span> */}
        </button>

      </div>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <a href="tel:1234567890" className="call-btn">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default Bottomnav;