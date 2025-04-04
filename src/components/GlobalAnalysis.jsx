import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, Legend
} from "recharts";
import { causasDesercion } from "../utils/dataAnalysis";
import "../styles/GlobalAnalysis.css";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#A28BFE", "#FF6666"];

const GlobalAnalysis = ({
    desertoresPorInstitucion,
    totalIngresados,
    totalDesertores,
    data
}) => {
    // 1. Gráfica de barras: Desertores por institución
    const barrasInstitucion = Object.entries(desertoresPorInstitucion).map(([name, value]) => ({
        name,
        desertores: value,
    }));

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

    return (
        <div className="global-analysis">
            {/* 1. Gráfica de barras */}
            <div className="graph-container">
                <h3>Desertores por institución</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barrasInstitucion}>
                        <XAxis dataKey="name" angle={-30} textAnchor="end" height={80} interval={0} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="desertores" fill="#FF8042" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* 2. Gráfica de pastel: Proporción desertores vs no desertores */}
            <div className="graph-container">
                <h3>Proporción de estudiantes</h3>
                <ResponsiveContainer width="100%" height={300}>
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
                <ResponsiveContainer width="100%" height={300}>
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
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default GlobalAnalysis;