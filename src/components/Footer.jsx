import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Acerca</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/manahuia_cuu" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contactame</h4>
                    <p>Lunes a Sabado: 9am - 12pm</p>
                    <p>Alejandra Martinez:</p>
                    <p>+52 (614) 107 7422</p>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; 2025 MANAHUIA.
            </div>
        </footer>
    );
};

export default Footer;
