import React from "react";
import Header from "./components/layout/header/header.jsx";
import Footer from "./components/layout/footer/footer.jsx";
import Hero from "./components/home/hero.jsx";
import Products from "./components/home/products.jsx";
import Industries from "./components/home/industries.jsx";
import Projects from "./components/home/projects.jsx";
import Contact from "./components/home/contact.jsx";
import Bottomnav from "./components/layout/bottom-menu/bottom-nav.jsx";
import Floating from "./components/common/floating.jsx";

function App() {
  // Scroll to section handler
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />

      <Hero />
      <Products />
      <Industries />
      <Projects />
      <Contact />
      <Footer />

      {/* Bottom Navigation */}
      <Bottomnav onMenuClick={handleMenuClick} />
      <Floating />
    </>
  );
}

export default App;
