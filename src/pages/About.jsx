import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className="about-container">
                <h1 className="about-title">Acerca de Nosotros</h1>
                <p className="about-description">
                    Somos una empresa dedicada a ofrecer soluciones innovadoras
                    que impulsan el crecimiento y la eficiencia en distintos sectores.
                </p>
                <div className="about-content">
                    <div className="about-section">
                        <h3>Misión</h3>
                        <p>Brindar soluciones de alta calidad que mejoren la vida de nuestros clientes.</p>
                    </div>
                    <div className="about-section">
                        <h3>Visión</h3>
                        <p>Ser reconocidos como líderes en innovación y desarrollo tecnológico.</p>
                    </div>
                    <div className="about-section">
                        <h3>Valores</h3>
                        <ul className="about-list">
                            <li>Innovación</li>
                            <li>Compromiso</li>
                            <li>Calidad</li>
                            <li>Trabajo en equipo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
