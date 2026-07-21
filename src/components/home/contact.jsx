import React from "react";
import "../../assets/css/home/contact.css";

import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

function Contact() {
  const contactDetails = [
    {
      id: 1,
      icon: <FiMapPin />,
      text: "violet Church road, Chennai Rcc Hume Pipes, 86/146, Vellalar St, Mogappair West, Chennai, Tamil Nadu 600037",
    },
    {
      id: 2,
      icon: <FiPhone />,
      text: "+91 96005 44451",
    },
    {
      id: 3,
      icon: <FiMail />,
      text: "info@chennairccpipes.in",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* LEFT FORM */}

        <div className="contact-form-box">
          <span className="contact-small-title">Get in Touch</span>

          <h2>Let's Chat, Reach Out to Us</h2>

          <p>
            Have questions about our concrete pipes or infrastructure solutions?
            Send us a message and our team will respond shortly.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="text" placeholder="Mobile Number" />

            <input type="email" placeholder="Email Address" />

            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* RIGHT SIDE */}

        <div className="contact-info-box">
          <div className="map-box">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51346885375!2d76.88483288141411!3d11.013957787973759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1773310629101!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62178.5202294394!2d80.1342007937814!3d13.089201935139487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263be4ee65b49%3A0xbe97ef26073b0c10!2sChennai%20RCC%20Hume%20Pipes!5e0!3m2!1sen!2sin!4v1782536513645!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              title="Company Location Map"
            ></iframe>
          </div>

          <div className="contact-cards">
            {contactDetails.map((item) => (
              <div key={item.id} className="contact-card">
                <div className="contact-icon">{item.icon}</div>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
