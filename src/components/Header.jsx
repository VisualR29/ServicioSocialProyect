import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/" className="logo">
                    MANAHUIA
                </NavLink>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/">Estadísticas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/plan">Planes de acción</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros">Sobre Manahuia</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
