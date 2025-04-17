import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from "recharts";
import {
    causasDesercion,
    porcentajeDesercionPorInstitucion
} from "../utils/dataAnalysis";
import "../styles/GlobalAnalysis.css";

const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
    "#A28BFE", "#FF6666", "#FFB6C1", "#4DD0E1", "#AED581"
];

const GlobalAnalysis = ({
    desertoresPorInstitucion,
    totalIngresados,
    totalDesertores,
    data
}) => {

    // ─── Gráfica 1: Porcentaje de deserción por institución ─────
    const barrasInstitucion = porcentajeDesercionPorInstitucion(data);

    // ─── Gráfica 2: Desertores vs No Desertores ─────
    const pieDesercion = [
        { name: "Desertaron", value: totalDesertores },
        { name: "No desertaron", value: totalIngresados - totalDesertores }
    ].sort((a, b) => b.value - a.value);

    // ─── Gráfica 3: Causas de deserción ─────
    const pieCausas = Object.entries(causasDesercion(data))
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

    // ─── Leyenda personalizada para causas ─────
    const CustomLegend = ({ payload }) => {
        if (!payload) return null;
        const top4 = [...payload].sort((a, b) => b.value - a.value).slice(0, 4);

        return (
            <div className="custom-legend">
                {top4.map((entry, index) => (
                    <div key={index} className="legend-item" style={{ color: entry.color }}>
                        <div className="legend-color" style={{ backgroundColor: entry.color }} />
                        <span>{entry.payload.name}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="global-analysis">
            {/* ─── 1. Porcentaje de deserción por institución ─── */}
            <div className="graph-container">
                <h3>Porcentaje por institución</h3>
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={barrasInstitucion}>
                        <XAxis
                            dataKey="name"
                            angle={-30}
                            textAnchor="end"
                            height={60}
                            interval={0}
                            fontSize={11}
                        />
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

            {/* ─── 2. Proporción de estudiantes desertores/no desertores ─── */}
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

            {/* ─── 3. Causas principales de deserción ─── */}
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
