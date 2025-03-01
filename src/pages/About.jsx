import './About.css';

const About = () => {
    return (
        <div className='about main-container'>
            <div className="about-container">
                <h1 className="about-title">Acerca de Manahuia</h1>
                <p className="about-description">
                    Manahuia es un proyecto, creado por Alejandra Mtz. con el proposito de combatir la deserción escolar en el estado de Chihuahua.
                </p>
                <div className="about-content">
                    <div className="about-section">
                        <h3>Misión</h3>
                        <p>Erradicar la deserción escolar, proporcionando recursos educativos accesibles, apoyo emocional y programas de tutoría para empoderar a los estudiantes, fomentando un entorno educativo inclusivo que inspire el compromiso y el éxito académico.</p>
                    </div>
                    <div className="about-section">
                        <h3>Visión</h3>
                        <p>Para el 2030 crear un futuro donde cada estudiante tenga acceso equitativo a oportunidades educativas, y la deserción escolar sea una problemática superada. Estableciendo un entorno educativo que nutra el potencial de cada estudiante.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
