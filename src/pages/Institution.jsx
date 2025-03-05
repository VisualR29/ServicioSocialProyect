import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
    totalIngresaron,
    totalDesertaron,
    alumnosPorCapacitacion,
    porcentajeDesercionTotal,
} from "../utils/dataAnalysis";
import csvFile from '../assets/Base_de_datos_de_alumnos.csv'
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
                    alumnosPorCapacitacion: alumnosPorCapacitacion(filteredData),
                });
            });
    }, [institution]);

    return (
        <div className="main-container">
            <h2>Análisis de {institution}</h2>
            {analysis ? (
                <>
                    <p><strong>Total de alumnos ingresados:</strong> {analysis.totalIngresaron}</p>
                    <p><strong>Total de desertores:</strong> {analysis.totalDesertaron}</p>
                    <p><strong>Porcentaje de deserción:</strong> {analysis.porcentajeDesercion}</p>

                    <h3>Alumnos por Capacitación</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={Object.entries(analysis.alumnosPorCapacitacion).map(([name, value]) => ({ name, value }))}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#007bff" />
                        </BarChart>
                    </ResponsiveContainer>
                </>
            ) : (
                <p className="loading-message">Cargando análisis...</p>
            )}
        </div>
    );
};

export default Institution;