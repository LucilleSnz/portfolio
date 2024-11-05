import React, { useState, useEffect } from 'react'; 
import '../styles/header.css';
import { FaBars, FaChevronDown } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Ferme le menu après le défilement
        } else {
            console.warn(`Section avec l'ID '${sectionId}' introuvable.`);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.querySelector('.dropdown-menu');
            const burgerMenu = document.querySelector('.burger-menu');
            if (dropdown && !dropdown.contains(event.target) && !burgerMenu.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className="header" id='header'>
            <div className="header-content">
                <img src={require('../images/profil.png')} alt="Photo de moi" className="header-img" />
                <h1 onClick={() => scrollToSection('projects')}>Lucille</h1>
                <h1 onClick={() => scrollToSection('projects')}>SANZO</h1>
                <p>Développeuse web</p>
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
                <FaBars size={30} color="#bca374" />
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={() => scrollToSection('header')}>Accueil</li>
                        <li onClick={() => scrollToSection('projects')}>Projets</li>
                        <li onClick={() => scrollToSection('skills')}>Compétences</li>
                        <li onClick={() => scrollToSection('about')}>Biographie</li>
                        <li onClick={() => scrollToSection('form')}>Contact</li>
                        <li onClick={() => scrollToSection('footer')}>A propos</li>
                    </ul>
                </div>
            )}
            <div className="chevron-container" onClick={() => scrollToSection('projects')}>
                <FaChevronDown size={40} color="#bca374" />
            </div>
        </section>
    );
}

export default Header;
