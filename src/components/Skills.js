import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello, faFigma, faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faSass, faSlack } from '@fortawesome/free-brands-svg-icons';
import '../styles/skills.css'
import mongodbLogo from '../images/mongodb.svg';
import postmanLogo from '../images/postman.svg';
import expressLogo from '../images/express.svg';
import '../styles/skills.css';


const skills = {
    frontend: [
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3Alt },
        { name: 'JavaScript', icon: faJsSquare },
        { name: 'React', icon: faReact },
        { name: 'Sass', icon: faSass },
    ],
    backend: [
        { name: 'Node.js', icon: faNodeJs },
        { name: 'Express.js', imgSrc: expressLogo },
    ],
    database: [
        { name: 'MongoDB', imgSrc: mongodbLogo },
    ],
    tools: [
        { name: 'Figma', icon: faFigma },
        { name: 'Slack', icon: faSlack },
        { name: 'Trello', icon: faTrello },
        { name: 'Postman', imgSrc: postmanLogo }, 
    ],
};

function Skills() {
    return (
        <section className="skills" id="skills">
            <h2 className="skills-title">Mes Compétences</h2>
            <div className="skills-categories-container">
                {Object.entries(skills).map(([category, skillSet]) => (
                    <div key={category} className="skills-category">
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <div className="skills-container">
                            {skillSet.map((skill, index) => (
                                <div className="skill-block" key={index}>
                                    {skill.icon ? (
                                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                    ) : (
                                        <img src={skill.imgSrc} alt={skill.name} className="skill-icon svg-icon" />
                                    )}
                                    <span className="tooltip">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
