import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
    totalIngresaron,
    totalDesertaron,
    alumnosPorCapacitacion,
    porcentajeDesercionTotal,
    causasDesercion,
    obtenerTopEstrategias
} from "../utils/dataAnalysis";
import SingleStrategy from '../components/SingleStrategy';
import { strategies } from "../assets/Estrategias";
import csvFile from '../assets/Base_datos_final.csv';
import "../styles/Institution.css";

const Institution = () => {
    const { institution } = useParams();
    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((fileData) => {
                const parsedData = Papa.parse(fileData, { header: true }).data;
                const filteredData = parsedData.filter((row) => row.Institución === institution);
                const causasRaw = causasDesercion(filteredData);

                setAnalysis({
                    totalIngresaron: totalIngresaron(filteredData),
                    totalDesertaron: totalDesertaron(filteredData),
                    porcentajeDesercion: porcentajeDesercionTotal(filteredData),
                    alumnosPorCapacitacion: alumnosPorCapacitacion(filteredData) || {},
                    causasDesercion: causasRaw || {},
                    causaPrincipal: obtenerCausaPrincipal(causasRaw),
                    estrategiaRecomendada: encontrarEstrategia(causasRaw),
                });
            });
    }, [institution]);

    const COLORS = ["#059669", "#0088FE", "#FFBB28", "#FF8042"];

    const obtenerCausaPrincipal = (causasObj) => {
        const ordenadas = Object.entries(causasObj).sort((a, b) => b[1] - a[1]);
        return ordenadas.length > 0 ? ordenadas[0][0] : null;
    };

    const encontrarEstrategia = (causasObj) => {
        const listaCausas = [];
        Object.entries(causasObj).forEach(([causa, cantidad]) => {
            for (let i = 0; i < cantidad; i++) {
                listaCausas.push(causa);
            }
        });

        const frecuencia = {};
        listaCausas.forEach((causa) => {
            frecuencia[causa] = (frecuencia[causa] || 0) + 1;
        });

        const causaMayor = Object.entries(frecuencia).sort((a, b) => b[1] - a[1])[0]?.[0];

        return strategies.find((estrategia) =>
            Array.isArray(estrategia.causasMatch) &&
            (estrategia.causasMatch.includes(causaMayor) || estrategia.causasMatch.includes("Todas"))
        );
    };

    let topEstrategias = [];
    if (analysis) {
        topEstrategias = obtenerTopEstrategias(analysis.causasDesercion);
    }


    return (
        <div className="institution-details">
            <h2>{institution}</h2>
            <p className="subtitle">Análisis de deserción</p>

            {analysis ? (
                <>
                    <div className="data-grid">
                        <div className="data-card">
                            <h3>Total de alumnos ingresados</h3>
                            <p className="data-value">{analysis.totalIngresaron}</p>
                        </div>
                        <div className="data-card">
                            <h3>Total de bajas</h3>
                            <p className="data-value">{analysis.totalDesertaron}</p>
                        </div>
                        <div className="data-card">
                            <h3>Porcentaje de deserción</h3>
                            <p className="data-value">{analysis.porcentajeDesercion}</p>
                        </div>
                    </div>

                    <div className="charts-container">
                        <div className="chart-box">
                            <h3>Índice de Deserción</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={Object.entries(analysis.alumnosPorCapacitacion || {}).map(([name, value]) => ({ name, value }))}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#059669" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart-box">
                            <h3>Factores Predominantes</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={Object.entries(analysis.causasDesercion || {}).map(([name, value], index) => ({ name, value, fill: COLORS[index % COLORS.length] }))} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                        {Object.entries(analysis.causasDesercion || {}).map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="recommendations">
                        <h3>Estrategias Recomendadas</h3>
                        <p className="description">Estas estrategias se seleccionaron en función de las causas más frecuentes.</p>
                        {topEstrategias.map((estrategia, i) => (
                            <details key={estrategia.id} className="accordion-item">
                                <summary className="accordion-title">#{i + 1} - {estrategia.title}</summary>
                                <SingleStrategy {...estrategia} />
                            </details>
                        ))}

                    </div>

                </>
            ) : (
                <p className="loading-message">Cargando análisis...</p>
            )}
        </div>
    );
};

export default Institution;