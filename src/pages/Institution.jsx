import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";

// ─── Recharts ─────────────────────
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
    ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";

// ─── Utilidades ───────────────────
import {
    totalIngresaron,
    totalDesertaron,
    alumnosPorCapacitacion,
    porcentajeDesercionTotal,
    causasDesercion,
    obtenerTopEstrategias,
    desertoresPorCapacitacion
} from "../utils/dataAnalysis";

// ─── Componentes ──────────────────
import SingleStrategy from "../components/SingleStrategy";
import TurnoToggle from "../components/TurnoToggle";
import { strategies } from "../assets/Estrategias";

// ─── Recursos ─────────────────────
import csvFile from "../assets/Base_datos_final.csv";
import "../styles/Institution.css";

const Institution = () => {
    const { institution } = useParams();

    const [analysis, setAnalysis] = useState(null);
    const [selectedTurno, setSelectedTurno] = useState("General");
    const [availableTurnos, setAvailableTurnos] = useState([]);

    // ─── Carga y procesamiento de datos ─────────────────────────
    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((fileData) => {
                const parsedData = Papa.parse(fileData, { header: true }).data;
                const filteredData = parsedData.filter((row) => row.Institución === institution);

                const turnos = [...new Set(filteredData.map(row => row.Turno))];
                setAvailableTurnos(turnos);

                const dataFiltradaPorTurno = selectedTurno === "General"
                    ? filteredData
                    : filteredData.filter(row => row.Turno === selectedTurno);

                const causasRaw = causasDesercion(dataFiltradaPorTurno);

                setAnalysis({
                    totalIngresaron: totalIngresaron(dataFiltradaPorTurno),
                    totalDesertaron: totalDesertaron(dataFiltradaPorTurno),
                    porcentajeDesercion: porcentajeDesercionTotal(dataFiltradaPorTurno),
                    alumnosPorCapacitacion: alumnosPorCapacitacion(dataFiltradaPorTurno) || {},
                    causasDesercion: causasRaw || {},
                    desertoresPorCapacitacion: desertoresPorCapacitacion(dataFiltradaPorTurno),
                    causaPrincipal: obtenerCausaPrincipal(causasRaw),
                    estrategiaRecomendada: encontrarEstrategia(causasRaw),
                });
            });
    }, [institution, selectedTurno]);

    // ─── Constantes y colores ────────────────────────────────────
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE", "#FF6666", "#FFB6C1", "#4DD0E1", "#AED581"];
    const mostrarToggle = availableTurnos.length > 1;

    // ─── Funciones auxiliares ────────────────────────────────────
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

    // ─── Derivados del análisis ─────────────────────────────────
    let topEstrategias = [];
    let pieCausasOrdenadas = [];
    let desertoresData = [];

    if (analysis) {
        topEstrategias = obtenerTopEstrategias(analysis.causasDesercion);

        pieCausasOrdenadas = Object.entries(analysis.causasDesercion || {})
            .map(([name, value]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);

        desertoresData = Object.entries(analysis.desertoresPorCapacitacion || {}).map(
            ([name, value]) => ({
                name: name.split(" ")[0],
                fullLabel: name,
                value,
            })
        );
    }

    const CustomLegend = ({ payload }) => {
        if (!payload) return null;

        const top4 = [...payload].sort((a, b) => b.value - a.value).slice(0, 4);

        return (
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "10px" }}>
                {top4.map((entry, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "0.85em",
                            color: entry.color,
                        }}
                    >
                        <div
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: entry.color,
                                marginRight: 6,
                            }}
                        />
                        <span>{entry.payload.name}</span>
                    </div>
                ))}
            </div>
        );
    };

    // ─── Render ────────────────────────────────────────────────
    return (
        <div className="institution-details">
            <h2>{institution}</h2>
            <p className="subtitle">Análisis de deserción</p>

            {mostrarToggle && (
                <TurnoToggle selected={selectedTurno} onChange={setSelectedTurno} />
            )}

            {analysis ? (
                <>
                    {/* ─── Métricas ─── */}
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

                    {/* ─── Gráficos ─── */}
                    <div className="charts-container">
                        <div className="chart-box">
                            <h3>Bajas por Capacitación</h3>
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart data={desertoresData}>
                                    <XAxis
                                        dataKey="name"
                                        interval={0}
                                        tick={{ fontSize: 10, fill: "#ccc" }}
                                    />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar
                                        dataKey="value"
                                        label={{ position: "top", fill: "#ccc", fontSize: 12 }}
                                    >
                                        {desertoresData.map((_, index) => (
                                            <Cell key={`bar-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="chart-box">
                            <h3>Factores Predominantes</h3>
                            <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie
                                        data={pieCausasOrdenadas}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        label
                                    >
                                        {pieCausasOrdenadas.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend content={<CustomLegend />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* ─── Estrategias recomendadas ─── */}
                    <div className="recommendations">
                        <h3>Estrategias Recomendadas</h3>
                        <p className="description">
                            Estas estrategias se seleccionaron en función de las causas más frecuentes.
                        </p>
                        {topEstrategias.map((estrategia, i) => (
                            <details key={estrategia.id} className="accordion-item">
                                <summary className="accordion-title">
                                    #{i + 1} - {estrategia.title}
                                </summary>
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
