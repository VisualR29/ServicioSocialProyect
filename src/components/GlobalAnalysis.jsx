import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
    causasDesercion,
    porcentajeDesercionPorInstitucion
} from "../utils/dataAnalysis";
import PieChartWithLegend from "./PieChartWithLegend";
import "../styles/GlobalAnalysis.css";

const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
    "#A28BFE", "#FF6666", "#FFB6C1", "#4DD0E1", "#AED581"
];

const GlobalAnalysis = ({ totalIngresados, totalDesertores, data }) => {
    const barrasInstitucion = porcentajeDesercionPorInstitucion(data);

    const pieDesercion = [
        { name: "Desertaron", value: totalDesertores },
        { name: "No desertaron", value: totalIngresados - totalDesertores }
    ].sort((a, b) => b.value - a.value);

    const pieCausas = Object.entries(causasDesercion(data))
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

    return (
        <div className="global-analysis">
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

            <div className="graph-container">
                <h3>Proporción de estudiantes</h3>
                <PieChartWithLegend data={pieDesercion} outerRadius={80} />
            </div>

            <div className="graph-container">
                <h3>Causas principales de deserción</h3>
                <PieChartWithLegend data={pieCausas} outerRadius={80} />
            </div>
        </div>
    );
};

export default GlobalAnalysis;
