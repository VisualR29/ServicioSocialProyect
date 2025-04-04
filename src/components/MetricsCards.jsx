import React from "react";
import "../styles/MetricsCards.css";

const MetricsCards = ({
    totalIngresados,
    totalDesertores,
    porcentajeDesercion
}) => {
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
            {cards.map((card, index) => (
                <div key={index} className="metric-card">
                    <p className="metric-value">{card.value}</p>
                    <p className="metric-label">{card.label}</p>
                </div>
            ))}
        </div>
    );
};

export default MetricsCards;