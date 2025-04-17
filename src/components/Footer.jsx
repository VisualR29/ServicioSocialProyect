import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section">
                    <h4>Navegación</h4>
                    <ul>
                        <li><NavLink to="/">Estadísticas</NavLink></li>
                        <li><NavLink to="/plan">Planes de acción</NavLink></li>
                        <li><NavLink to="/nosotros">Sobre Manahuia</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/manahuia_cuu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contáctame</h4>
                    <p>Lunes a Sábado: 9am - 12pm</p>
                    <p>Alejandra Martínez</p>
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
