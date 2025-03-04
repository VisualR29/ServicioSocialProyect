import BlockText from '../components/BlockText';
import '../styles/About.css';

const About = () => {
    return (
        <div className='main-container'>
            <div className="sub-container">
                <h1 className="title">Acerca de Manahuia</h1>
                <p className="description">
                    Manahuia es un proyecto, creado por Alejandra Mtz. con el proposito de combatir la deserción escolar en el estado de Chihuahua.
                </p>
                <div className="content">
                    <BlockText title={"Misión"} children={"Erradicar la deserción escolar, proporcionando recursos educativos accesibles, apoyo emocional y programas de tutoría para empoderar a los estudiantes, fomentando un entorno educativo inclusivo que inspire el compromiso y el éxito académico."} alignLeft={true}/>
                    <BlockText title={"Visión"} children={"Para el 2030 crear un futuro donde cada estudiante tenga acceso equitativo a oportunidades educativas, y la deserción escolar sea una problemática superada. Estableciendo un entorno educativo que nutra el potencial de cada estudiante."} alignLeft={true} />
                </div>
            </div>
        </div>
    );
};

export default About;
