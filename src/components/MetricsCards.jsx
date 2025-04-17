import "../styles/MetricsCards.css";

const MetricsCards = ({ totalIngresados, totalDesertores, porcentajeDesercion }) => {
    const cards = [
        {
            label: "Porcentaje de deserción",
            value: porcentajeDesercion,
        },
        {
            label: "Total de estudiantes ingresados",
            value: totalIngresados,
        },
        {
            label: "Total de bajas",
            value: totalDesertores,
        },
    ];

    return (
        <div className="metrics-grid">
            {cards.map(({ label, value }, index) => (
                <div key={index} className="metric-card">
                    <p className="metric-value">{value}</p>
                    <p className="metric-label">{label}</p>
                </div>
            ))}
        </div>
    );
};

export default MetricsCards;