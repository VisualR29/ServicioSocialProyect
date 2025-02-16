import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Sección de Navegación */}
                <div className="footer-section">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Acerca</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

                {/* Sección de Redes Sociales */}
                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                {/* Sección de Contacto */}
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Email: contacto@misitio.com</p>
                    <p>Tel: +52 123 456 7890</p>
                </div>
            </div>

            {/* Derechos de autor */}
            <div className="footer-bottom">
                &copy; 2025 MiSitio. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
