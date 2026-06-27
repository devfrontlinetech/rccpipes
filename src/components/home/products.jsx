import React from "react";
import "../../assets/css/home/product.css";

import { FaStar, FaWhatsapp } from "react-icons/fa";
import { GiConcreteBag } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";

import pipe1 from "../../assets/images/products/pipe-01.jpg";
import pipe2 from "../../assets/images/products/pipe-02.jpg";
import pipe3 from "../../assets/images/products/pipe-03.jpg";
import pipe4 from "../../assets/images/products/pipe-04.jpg";
import pipe5 from "../../assets/images/products/pipe-05.jpg";
import pipe6 from "../../assets/images/products/pipe-06.jpg";
import pipe7 from "../../assets/images/products/pipe-07.jpg";
import pipe8 from "../../assets/images/products/pipe-08.jpg";
import pipe9 from "../../assets/images/products/pipe-09.jpg";
import pipe10 from "../../assets/images/products/pipe-10.jpg";
import pipe11 from "../../assets/images/products/pipe-11.jpg";
import pipe12 from "../../assets/images/products/pipe-12.jpg";

const productData = [
  {
    id: 1,
    name: "RCC Concrete Pipe",
    material: "Reinforced Cement Concrete",
    size: "300mm - 1200mm",
    price: "₹1,200 / piece",
    rating: "4.8",
    image: pipe1,
  },
  {
    id: 2,
    name: "NP3 Concrete Pipe",
    material: "Heavy Duty Concrete",
    size: "600mm - 1500mm",
    price: "₹1,850 / piece",
    rating: "4.7",
    image: pipe2,
  },
  {
    id: 3,
    name: "Precast Manhole Cover",
    material: "Precast Concrete",
    size: "Standard Sizes",
    price: "₹950 / piece",
    rating: "4.6",
    image: pipe3,
  },
  {
    id: 4,
    name: "Concrete Drainage Ring",
    material: "High Strength Concrete",
    size: "500mm - 1000mm",
    price: "₹700 / piece",
    rating: "4.5",
    image: pipe4,
  },
  {
    id: 5,
    name: "Precast Concrete Box Culvert",
    material: "Precast Concrete",
    size: "Custom Sizes",
    price: "₹5,000 / piece",
    rating: "4.9",
    image: pipe5,
  },
  {
    id: 6,
    name: "Concrete Septic Tank",
    material: "Reinforced Concrete",
    size: "1000L - 5000L",
    price: "₹4,500 / piece",
    rating: "4.7",
    image: pipe6,
  },
  {
    id: 7,
    name: "RCC Hume Pipe",
    material: "Heavy Reinforced Concrete",
    size: "400mm - 1400mm",
    price: "₹1,600 / piece",
    rating: "4.6",
    image: pipe7,
  },
  {
    id: 8,
    name: "Concrete Inspection Chamber",
    material: "Precast Concrete",
    size: "Standard Sizes",
    price: "₹1,100 / piece",
    rating: "4.5",
    image: pipe8,
  },
  {
    id: 9,
    name: "Precast Concrete Slab",
    material: "High Strength Concrete",
    size: "Custom Sizes",
    price: "₹2,000 / piece",
    rating: "4.7",
    image: pipe9,
  },
  {
    id: 10,
    name: "Concrete U Drain Channel",
    material: "Precast Concrete",
    size: "300mm - 900mm",
    price: "₹850 / piece",
    rating: "4.6",
    image: pipe10,
  },
  {
    id: 11,
    name: "RCC Roadside Drain Pipe",
    material: "Reinforced Cement Concrete",
    size: "500mm - 1000mm",
    price: "₹1,350 / piece",
    rating: "4.8",
    image: pipe11,
  },
  {
    id: 12,
    name: "Precast Concrete Cable Trench",
    material: "Heavy Duty Concrete",
    size: "Custom Sizes",
    price: "₹3,200 / piece",
    rating: "4.7",
    image: pipe12,
  },
];

const Products = () => {
  const whatsappNumber = "911234567890";

  const sendWhatsapp = (product) => {
    const message = `Hello, I'm interested in ${product.name}. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="products-title">Our Products</h2>
        <p className="product-desc">High quality pipes for construction and infrastructure projects</p>

        <div className="product-grid">
          {productData.map((product) => (
            <div key={product.id} className="product-card">
              {/* IMAGE */}
              <div className="product-image-box">
                <img src={product.image} alt={product.name} />

                <div className="product-badge">{product.price}</div>
              </div>

              {/* CONTENT */}
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-info">
                  <div className="info-row">
                    <GiConcreteBag className="product-icon" />
                    <span>{product.material}</span>
                  </div>

                  <div className="info-row">
                    <FiLayers className="product-icon" />
                    <span>{product.size}</span>
                  </div>

                  <div className="info-row rating">
                    <FaStar className="star-icon" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <button
                  className="product-btn"
                  onClick={() => sendWhatsapp(product)}
                >
                  <FaWhatsapp />
                  Yes I'm Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
