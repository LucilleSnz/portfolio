import React, { useState } from 'react';
import Slider from 'react-slick';
import '../styles/projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const projects = [
  {
    title: 'Projet Booki',
    img: require('../images/photobooki.png'),
    link: 'https://github.com/LucilleSnz/Projet-2/tree/Booki_sanzo_lucille/Projet-2-Booki_sanzo_lucille',
    description: `Implanter une interface responsive avec HTML/CSS.
    Intégrer du contenu selon une maquette en HTML/CSS.
    Versionner avec Git et GitHub.
    Installer un environnement front-end.` },
  {
    title: 'Projet Nina Carducci',
    img: require('../images/nina.png'),
    link: 'https://github.com/LucilleSnz/Projet-5',
    description: `Optimiser les performances d’un site web.
    Débugger un site web grâce aux Chrome DevTools.
    Rédiger un cahier de recette pour tester un site.`
  },
  {
    title: 'Projet Santa Secret',
    img: require('../images/santasecret.png'),
    link: 'https://github.com/LucilleSnz/SantaSecret',
    description: `Faire un tirage au sort aléatoire avec plusieurs prénoms.
    Afficher secretement à qui offrir. Ne jamais retomber sur le même prénom.` },
  {
    title: 'Projet Mon vieux Grimoire',
    img: require('../images/grimoire.png'),
    link: 'https://github.com/LucilleSnz/Projet-7',
    description: `Implanter un modèle logique de données conformément à la réglementation.
    Mettre en œuvre des opérations CRUD de manière sécurisée.
    Stocker des données de manière sécurisée.` },
  {
    title: 'Projet Sophie Bluel',
    img: require('../images/bluel.png'),
    link: 'https://github.com/LucilleSnz/Projet-3',
    description: `Gérer les événements utilisateurs avec JavaScript.
    Manipuler les éléments du DOM avec JavaScript.
    Récupérer les données utilisateurs dans le JavaScript via des formulaires.` },
  {
    title: 'Projet Messagerie instanée',
    img: require('../images/messagerie.png'),
    link: 'https://github.com/LucilleSnz/Messagerie',
    description: `création d’un serveur Node.js.
    Communication temps réel avec Socket.IO.
    interface web interactive en HTML/CSS/JS.` },
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

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1>Mes projets</h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => handleFlip(index)}>
              <div className={`flip-card-projects-inner ${flippedIndex === index ? 'flipped' : ''}`}>
                <div className="flip-card-projects-front">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="flip-card-projects-back">
                  <p>{project.description}</p>
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <h3 className="project-title">{project.title}</h3>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;