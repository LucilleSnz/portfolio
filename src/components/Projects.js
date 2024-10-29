import React from 'react';
import Slider from 'react-slick';
import '../styles/projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const projects = [
  { title: 'Projet Booki', img: require('../images/photobooki.png'), link: 'https://github.com/LucilleSnz/Projet-2/tree/Booki_sanzo_lucille/Projet-2-Booki_sanzo_lucille' },
  { title: 'Projet Nina Carducci', img: require('../images/nina.png'), link: 'https://github.com/LucilleSnz/Projet-5' },
  { title: 'Projet Santa Secret', img: require('../images/santasecret.png'), link: 'https://github.com/LucilleSnz/SantaSecret' }, 
  { title: 'Projet Mon vieux Grimoire', img: require('../images/grimoire.png'), link: 'https://github.com/LucilleSnz/Projet-7' }, 
  { title: 'Projet Sophie Bluel', img: require('../images/bluel.png'), link: 'https://github.com/LucilleSnz/Projet-3' }, 
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1>Mes projets</h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;