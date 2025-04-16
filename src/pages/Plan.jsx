import '../styles/Plan.css';
import { strategies } from '../assets/Estrategias';
import SingleStrategy from '../components/SingleStrategy';

const Plan = () => {

    return (
        <div className='main-container'>
            <div className='sub-container'>
                <h1 className='plan-title'>Estrategias Contra la Deserción</h1>
                <p className='description'>Explora cada estrategia desplegando su impacto, actividades y responsables.</p>

                <div className='accordion-container'>
                    {strategies.map(({ id, title, problems, description, timeline }) => (
                        <details key={id} className='accordion-item'>
                            <summary className='accordion-title'>{title}</summary>
                            <SingleStrategy
                                title={title}
                                problems={problems}
                                description={description}
                                timeline={timeline}
                            />
                        </details>
                    ))}
                </div>

                <section className='plan-considerations'>
                    <div className='sub-container'>
                        <h2 className='title'>Consideraciones Generales</h2>
                        <ul className='description'>
                            <li>Todo plan parte de un diagnóstico psicosocial inicial.</li>
                            <li>Debe haber enfoque diferenciado rural vs urbano.</li>
                            <li>Capacitación constante a docentes en comunicación y psicología adolescente.</li>
                            <li>Sistema de Alerta Temprana Digital como herramienta clave de intervención.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Plan;