import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from "recharts";
import { causasDesercion, porcentajeDesercionPorInstitucion } from "../utils/dataAnalysis";
import "../styles/GlobalAnalysis.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE", "#FF6666"];

const GlobalAnalysis = ({
    desertoresPorInstitucion,
    totalIngresados,
    totalDesertores,
    data
}) => {
    // 1. Gráfica de barras: Desertores por institución
    const barrasInstitucion = porcentajeDesercionPorInstitucion(data);

    // 2. Gráfica de pastel: Desertores vs No Desertores
    const pieDesercion = [
        { name: "Desertaron", value: totalDesertores },
        { name: "No desertaron", value: totalIngresados - totalDesertores },
    ];

    // 3. Gráfica de pastel: Causas reales de deserción
    const pieCausas = Object.entries(causasDesercion(data)).map(([name, value]) => ({
        name,
        value,
    }));

    const CustomLegend = ({ payload }) => {
        if (!payload) return null;
        const top4 = [...payload]
            .sort((a, b) => b.value - a.value)
            .slice(0, 4);
        return (
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "10px" }}>
                {top4.map((entry, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", fontSize: "0.85em", color:entry.color}}>
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


    return (
        <div className="global-analysis">
            {/* 1. Gráfica de barras */}
            <div className="graph-container">
                <h3>Porcentaje por institución</h3>
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={barrasInstitucion}>
                        <XAxis dataKey="name" angle={-30} textAnchor="end" height={60} interval={0} fontSize={11} />
                        <YAxis unit="%" />
                        <Tooltip />
                        <Bar dataKey="porcentaje">
                            {barrasInstitucion.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* 2. Gráfica de pastel: Proporción desertores vs no desertores */}
            <div className="graph-container">
                <h3>Proporción de estudiantes</h3>
                <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                        <Pie
                            data={pieDesercion}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {pieDesercion.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* 3. Gráfica de pastel: Causas reales de deserción */}
            <div className="graph-container">
                <h3>Causas principales de deserción</h3>
                <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                        <Pie
                            data={pieCausas}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {pieCausas.map((_, index) => (
                                <Cell key={`cell-cause-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend content={<CustomLegend />} />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default GlobalAnalysis;