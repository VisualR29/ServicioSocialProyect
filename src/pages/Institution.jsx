import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
    totalIngresaron,
    totalDesertaron,
    alumnosPorCapacitacion,
    porcentajeDesercionTotal,
    causasDesercion
} from "../utils/dataAnalysis";
import csvFile from '../assets/Base_de_datos_de_al.csv';
import "../styles/Institution.css";

const Institution = () => {
    const { institution } = useParams();
    const [data, setData] = useState([]);
    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((fileData) => {
                const parsedData = Papa.parse(fileData, { header: true }).data;
                const filteredData = parsedData.filter((row) => row.Institución === institution);
                setData(filteredData);

                setAnalysis({
                    totalIngresaron: totalIngresaron(filteredData),
                    totalDesertaron: totalDesertaron(filteredData),
                    porcentajeDesercion: porcentajeDesercionTotal(filteredData),
                    alumnosPorCapacitacion: alumnosPorCapacitacion(filteredData) || {},
                    causasDesercion: causasDesercion(filteredData) || {},
                });
            });
    }, [institution]);

    const COLORS = ["#059669", "#0088FE", "#FFBB28", "#FF8042"];

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
                            <h3>Total de desertores</h3>
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
                        <h3>Recomendaciones</h3>
                        <ul>
                            <li>Fortalecer programas de apoyo psicológico para reducir casos de bullying.</li>
                            <li>Mejorar el acompañamiento académico y tutorías.</li>
                            <li>Implementar incentivos para evitar la deserción por factores económicos.</li>
                            <li>Crear espacios de integración y pertenencia para los estudiantes.</li>
                        </ul>
                    </div>
                </>
            ) : (
                <p className="loading-message">Cargando análisis...</p>
            )}
        </div>
    );
};

export default Institution;
