import '../styles/petals.css';
import { useEffect } from 'react';
import petal1 from '../images/petal1.png';
import petal2 from '../images/petal2.png';
import petal3 from '../images/petal3.png';

const images = [petal1, petal2, petal3];

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const randomImage = images[Math.floor(Math.random() * images.length)];
    petal.style.backgroundImage = `url(${randomImage})`;

    // Position aléatoire pour démarrer la chute
    petal.style.left = Math.random() * 100 + 'vw';

    // Taille des pétales (ex. entre 150px et 300px)
    petal.style.width = petal.style.height = Math.random() * 150 + 150 + 'px';

    // Durée aléatoire pour la chute
    const fallDuration = Math.random() * 4 + 4; // entre 4 et 8 secondes pour une chute plus fluide
    petal.style.animationDuration = fallDuration + 's';

    // Animation directe sans délai
    petal.style.animationDelay = '0s';

    // Ajoute la pétale au conteneur
    document.getElementById('petal-container').appendChild(petal);

    // Supprime la pétale une fois l'animation terminée
    setTimeout(() => {
        petal.remove();
    }, fallDuration * 1000);
}

const Petals = () => {
    useEffect(() => {
        // Utiliser un intervalle aléatoire entre chaque création de pétale
        const intervalId = setInterval(() => {
            // Aléatoire entre 500ms et 2000ms
            const randomDelay = Math.random() * 1500 + 500;
            createPetal();
        }, Math.random() * 1500 + 500); // Délai variable entre la création des pétales

        return () => clearInterval(intervalId);
    }, []);

    return <div id="petal-container" className="petal-container"></div>;
};

export default Petals;