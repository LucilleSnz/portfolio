import React, { useState } from 'react';
import '../styles/contactForm.css';
import emailjs from 'emailjs-com'; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Remplacez ces valeurs par celles obtenues dans EmailJS
        const serviceID = 'service_5lil41f'; // Remplacez par votre Service ID
        const templateID = 'template_djihmm8'; // Remplacez par votre Template ID
        const userID = 'B7GL7d4ESaMoJcpBA'; // Remplacez par votre User ID

        // Envoyer l'email via EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true); // Marquer comme soumis après l'envoi réussi
            })
            .catch((err) => {
                console.error('FAILED...', err);
            });
    };

    return (
        <div className="contact-form-container">
            <h2>Contactez-moi</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Que puis-je faire pour vous ?"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Envoyer</button>
                </form>
            ) : (
                <div className="form-submitted">
                    <p>Merci pour votre message ! Je reviendrai vers vous bientôt.</p>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
