import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const InstitucionCharts = ({ data }) => {
    if (!data) {
        return <p>Cargando datos...</p>;
    }

    const chartData = Object.entries(data).flatMap(([capacitacion, cantidad]) => ({
        name: capacitacion,
        Desertores: cantidad,
    }));

    return (
        <div>
            <h3>Desertores por Capacitación</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Desertores" fill="#FF8042" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InstitucionCharts;
