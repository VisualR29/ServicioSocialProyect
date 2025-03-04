import BlockText from '../components/BlockText';
import '../styles/Plan.css';

const Plan = () => {
    return (
        <div className='main-container'>
            <div className="sub-container">
                <h1 className="title">Estrategias de acción</h1>
                <p className="description">
                    Nuestra estrategia está enfocada en ofrecer servicios de calidad,
                    adaptándonos a las necesidades de nuestros clientes y promoviendo
                    soluciones innovadoras.
                </p>
                <div className="content">
                    <BlockText title={"Estrategia 1"} children={"Optimización de recursos para mejorar la eficiencia operativa."} alignLeft={false} />
                    <BlockText title={"Estrategia 2"} children={"Implementación de tecnologías de vanguardia."} alignLeft={false} />
                    <BlockText title={"Estrategia 3"} children={"Expansión a nuevos mercados internacionales."} alignLeft={false} />
                </div>
            </div>
        </div>
    );
};

export default Plan;
