import '../styles/TurnoToggle.css';

const TurnoToggle = ({ selected, onChange }) => {
    const opciones = ['General', 'Matutino', 'Vespertino'];

    return (
        <div className="turno-toggle">
            {opciones.map((opcion) => (
                <button
                    key={opcion}
                    className={`toggle-btn ${selected === opcion ? 'active' : ''}`}
                    onClick={() => onChange(opcion)}
                >
                    {opcion}
                </button>
            ))}
        </div>
    );
};

export default TurnoToggle;
