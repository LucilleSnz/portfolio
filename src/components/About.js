import React, { useState, useEffect } from 'react';
import '../styles/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faKeyboard, faPersonBreastfeeding, faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';


function About() {
    const [rotatedBlocks, setRotatedBlocks] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const aboutBlocks = document.querySelectorAll('.about-block');

            aboutBlocks.forEach((block, index) => {
                const rect = block.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setRotatedBlocks(prevState => ({
                        ...prevState,
                        [index + 1]: true,
                    }));
                }
            });
        };

        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

        // Fonction pour gérer le clic et faire tourner la carte
        const handleBlockClick = (index) => {
            setRotatedBlocks((prevState) => ({
                ...prevState,
                [index]: !prevState[index], // Inverse l'état de la carte (true/false)
            }));
        };
    

    return (
        <section className="about" id="about">
            <h2>À propos de moi</h2>
            <div className="about-container">

                {/* Bloc 1 */}
                <div className="about-block" onClick={() => handleBlockClick(1)}>
                    <div className="flip-card">
                        <div className={`flip-card-inner ${rotatedBlocks[1] ? 'rotate' : ''}`}>
                            <div className="flip-card-front">
                                <FontAwesomeIcon icon={faKeyboard} className="icon" />
                            </div>
                            <div className="flip-card-back">
                                <p>Je suis Lucille, une développeuse en alternance. Voici un aperçu de mon parcours..</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="about-block" onClick={() => handleBlockClick(2)}>
                    <div className="flip-card">
                        <div className={`flip-card-inner ${rotatedBlocks[2] ? 'rotate' : ''}`}>
                            <div className="flip-card-front">
                                <FontAwesomeIcon icon={faBriefcase} className="icon" />
                            </div>
                            <div className="flip-card-back">
                                <p>Après mon bac, j'ai travaillé dans le commerce et la vente, pour finir dans l'analytique.
                                    Malgré mes progressions, je me suis rapidement ennuyée dans ces postes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloc 3 */}
                <div className="about-block" onClick={() => handleBlockClick(3)}>
                    <div className="flip-card">
                        <div className={`flip-card-inner ${rotatedBlocks[3] ? 'rotate' : ''}`}>
                            <div className="flip-card-front">
                                <FontAwesomeIcon icon={faPersonBreastfeeding} className="icon" />
                            </div>
                            <div className="flip-card-back">
                                <p>Maman de deux aventuriers, j'ai décidé de reprendre mes études pour
                                    devenir développeuse web à la suite d'une discussion d'un ami passionné.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloc 4 */}
                <div className="about-block" onClick={() => handleBlockClick(4)}>
                    <div className="flip-card">
                        <div className={`flip-card-inner ${rotatedBlocks[4] ? 'rotate' : ''}`}>
                            <div className="flip-card-front">
                                <FontAwesomeIcon icon={faFaceLaughWink} className="icon" />
                            </div>
                            <div className="flip-card-back">
                                <p>Je suis maintenant plongée dans cette nouvelle aventure,
                                    prête à relever de nouveaux défis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
