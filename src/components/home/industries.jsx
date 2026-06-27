import React from "react";
import "../../assets/css/home/industries.css";

import road from "../../assets/images/industries/road.jpg";
import drainage from "../../assets/images/industries/drainage.jpg";
import municipal from "../../assets/images/industries/municipal.jpg";
import infrastructure from "../../assets/images/industries/infrastructure.jpg";
import realestate from "../../assets/images/industries/realestate.jpg";

function Industries() {
  const industriesData = [
    {
      id: 1,
      title: "Road Construction",
      image: road,
      desc: "Concrete pipes support road drainage systems, culverts, and stormwater channels, ensuring long-term durability and efficient water flow in high traffic environments.",
    },
    {
      id: 2,
      title: "Drainage Systems",
      image: drainage,
      desc: "Our pipes are widely used in stormwater management, irrigation channels, and wastewater networks to maintain safe and efficient water flow.",
    },
    {
      id: 3,
      title: "Municipal Projects",
      image: municipal,
      desc: "Municipal infrastructure depends on reliable pipe systems for sewage, drainage, and public utility installations.",
    },
    {
      id: 4,
      title: "Infrastructure Development",
      image: infrastructure,
      desc: "Large infrastructure projects such as highways, bridges, and tunnels require durable reinforced concrete pipe systems.",
    },
    {
      id: 5,
      title: "Real Estate Construction",
      image: realestate,
      desc: "Residential and commercial projects rely on underground drainage and sewage systems built with high-quality pipes.",
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <div className="section-title">
          <h2>Industries We Serve</h2>
          <p>
            Our reinforced concrete pipes are trusted across multiple industries
            for drainage, infrastructure development, and construction projects.
          </p>
        </div>

        {industriesData.map((item, index) => (
          <div
            key={item.id}
            className={`industry-row ${index % 2 !== 0 ? "reverse" : ""}`}
            data-aos="fade-up"
          >
            <div className="industry-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="industry-text">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Industries;
