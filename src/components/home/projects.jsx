import React from "react";
import "../../assets/css/home/projects.css";

import project1 from "../../assets/images/projects/project-01.jpg";
import project2 from "../../assets/images/projects/project-02.jpg";
import project3 from "../../assets/images/projects/project-03.jpg";
import project4 from "../../assets/images/projects/project-04.jpg";
import project5 from "../../assets/images/projects/project-05.jpg";
import project6 from "../../assets/images/projects/project-06.jpg";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Highway Drainage System",
      image: project1,
      desc: "Supply and installation of reinforced concrete pipes for a large-scale highway drainage system designed to handle heavy rainfall and long-term infrastructure durability.",
    },
    {
      id: 2,
      title: "Municipal Stormwater Project",
      image: project2,
      desc: "Concrete pipe supply for a city stormwater drainage network to improve water flow management and reduce flooding in urban areas.",
    },
    {
      id: 3,
      title: "Industrial Drainage Network",
      image: project3,
      desc: "Large diameter RCC pipes supplied for an industrial drainage system supporting factories and manufacturing facilities.",
    },
    {
      id: 4,
      title: "Bridge Culvert Construction",
      image: project4,
      desc: "Precast concrete culvert pipes used for bridge and road crossing drainage ensuring structural strength and long service life.",
    },
    {
      id: 5,
      title: "Residential Township Drainage",
      image: project5,
      desc: "Concrete pipe installation for underground sewage and rainwater drainage systems in a modern residential township development.",
    },
    {
      id: 6,
      title: "Agricultural Irrigation System",
      image: project6,
      desc: "Concrete pipeline system developed for agricultural irrigation to support reliable water distribution across farmland areas.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-title">
          <h2>Our Projects</h2>
          <p>
            We have successfully supplied reinforced concrete pipes and precast
            products for major infrastructure, drainage, and construction
            projects across multiple sectors.
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
