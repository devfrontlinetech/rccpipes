import React from "react";
import "../../assets/css/home/hero.css";
import heroVideo from "../../assets/videos/hero-sec/hero-video-01.mp4";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1>High-Strength Concrete Pipes</h1>

        <p>
          Durable RCC and precast concrete products engineered for drainage
          systems, infrastructure, and large-scale construction projects.
        </p>

        <div className="hero-buttons">  
          <a href="#products" className="btn">
            View Products
          </a>

          <a href="#contact" className="btn btn-outline">
            Request Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
