import React from 'react';
import './Plan.css';

const Plan = () => {
    return (
        <div className='plan'>
            <div className="plan-container">
                <h1 className="plan-title">Nuestro Plan</h1>
                <p className="plan-description">
                    Nuestra estrategia está enfocada en ofrecer servicios de calidad,
                    adaptándonos a las necesidades de nuestros clientes y promoviendo
                    soluciones innovadoras.
                </p>
                <div className="plan-grid">
                    <div className="plan-card">
                        <h3>Estrategia 1</h3>
                        <p>Optimización de recursos para mejorar la eficiencia operativa.</p>
                    </div>
                    <div className="plan-card">
                        <h3>Estrategia 2</h3>
                        <p>Implementación de tecnologías de vanguardia.</p>
                    </div>
                    <div className="plan-card">
                        <h3>Estrategia 3</h3>
                        <p>Expansión a nuevos mercados internacionales.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
