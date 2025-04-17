import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const InstitucionCharts = ({ data }) => {
    if (!data) {
        return <p>Cargando datos...</p>;
    }

    const chartData = Object.entries(data).map(([capacitacion, cantidad]) => ({
        name: capacitacion,
        desertores: cantidad
    }));

    return (
        <div className="institucion-chart">
            <h3>Bajas por Capacitación</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="name" interval={0} angle={-15} textAnchor="end" tick={{ fontSize: 11 }} />
                    <YAxis />
                    <Tooltip
                        formatter={(value) => [`${value} alumnos`, 'Desertores']}
                        labelFormatter={(label) => `Capacitación: ${label}`}
                    />
                    <Legend />
                    <Bar dataKey="desertores" fill="#FF8042" label={{ position: 'top', fontSize: 10, fill: '#ccc' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InstitucionCharts;
