import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">MANAHUIA</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#home">Estadisticas</a></li>
                    <li><a href="#about">Plan de acción</a></li>
                    <li><a href="#services">Sobre nosotros</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
