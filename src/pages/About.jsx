import BlockText from '../components/BlockText';

const About = () => {
    return (
        <div className="main-container">
            <div className="sub-container">
                <h1 className="title">Acerca de Manahuia</h1>
                <p className="description">
                    Manahuia es un proyecto creado por Alejandra Martínez con el propósito de combatir la deserción escolar en el estado de Chihuahua.
                </p>

                <div className="content">
                    <BlockText
                        title="Misión"
                        alignLeft={true}
                    >
                        Erradicar la deserción escolar, proporcionando recursos educativos accesibles, apoyo emocional y programas de tutoría para empoderar a los estudiantes, fomentando un entorno educativo inclusivo que inspire el compromiso y el éxito académico.
                    </BlockText>

                    <BlockText
                        title="Visión"
                        alignLeft={true}
                    >
                        Para el 2030, crear un futuro donde cada estudiante tenga acceso equitativo a oportunidades educativas, y la deserción escolar sea una problemática superada, estableciendo un entorno educativo que nutra el potencial de cada estudiante.
                    </BlockText>
                </div>
            </div>
        </div>
    );
};

export default About;
