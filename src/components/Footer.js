import React from 'react';
import '../styles/footer.css';
import CV from '../assets/CV.-Lucille-SANZO-developpeuse.pdf';


const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-left">
                <p className="footer-description">
                    " Petite mais… costaude en caractère !<br/> 
                    Sous mes airs discrets, je suis une professionnelle engagée, 
                    avec un sens aigu du savoir-être et du savoir-faire. 
                    J’aime les choses bien organisées, et je crois fermement en une communication claire et transparente : 
                    avec moi, on sait où on va ! Avec une écoute attentive et une bonne dose de sensibilité, 
                    je mets un point d'honneur à comprendre les besoins de chaque projet (et de chaque personne). 
                    Nature et fleurs me passionnent, tout comme la bonne cuisine ! Mon appétit pour les bons plats 
                    est aussi grand que celui pour le travail bien fait – même si, de l'extérieur, ça reste un secret bien gardé !"
                </p>
                <div className="footer-links">
                        <a href={CV} className="footer-download-btn" download='CV-Lucille-SANZO-developpeuse.pdf'>
                            Télécharger mon CV
                        </a>
                        <div className="footer-head">
                            <a href="https://www.linkedin.com/in/lucille-sanzo-3b727a26b/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                LinkedIn
                            </a>
                            <a href="https://github.com/LucilleSnz" target="_blank" rel="noopener noreferrer" className="footer-link">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <a href='https://www.google.fr/maps/place/73000+Chamb%C3%A9ry/@45.5822872,5.865153,13z/data=!3m1!4b1!4m6!3m5!1s0x478ba85708695f63:0xd5c21acfa63d899c!8m2!3d45.564601!4d5.917781!16zL20vMDNsajA1?hl=fr&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D'
                    target="_blank" rel="noopener noreferrer" className="footer-link">
                        📍 Chambéry
                    </a>
                </div>
        </footer>
    );
};

export default Footer;