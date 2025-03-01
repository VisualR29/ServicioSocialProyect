import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE", "#FF6666"];

const Charts = ({ stats }) => {
    if (!stats.desertoresInstitucion || !stats.desertoresInstitucionCapacitacion) {
        return <p>Cargando datos...</p>;
    }

    // Convertir los datos a un formato adecuado para Recharts
    const desertoresInstitucionData = Object.entries(stats.desertoresInstitucion).map(([institucion, cantidad]) => ({
        name: institucion,
        Desertores: cantidad,
    }));

    const desertoresCapacitacionData = Object.entries(stats.desertoresInstitucionCapacitacion).flatMap(
        ([institucion, capacitaciones]) =>
            Object.entries(capacitaciones).map(([capacitacion, cantidad]) => ({
                name: `${institucion} - ${capacitacion}`,
                Desertores: cantidad,
            }))
    );

    return (
        <div>
            {/* 📊 Gráfico de Barras - Desertores por Institución */}
            <h3>Desertores por Institución</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={desertoresInstitucionData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Desertores" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            {/* 🥧 Gráfico de Pastel - Desertores por Capacitación */}
            <h3>Desertores por Institución y Capacitación</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={desertoresCapacitacionData}
                        dataKey="Desertores"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >
                        {desertoresCapacitacionData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            {/* 📋 Tabla - Datos Crudos */}
            <h3>Tabla de Desertores por Institución y Capacitación</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Institución</th>
                        <th>Capacitación</th>
                        <th>Desertores</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(stats.desertoresInstitucionCapacitacion).flatMap(([institucion, capacitaciones]) =>
                        Object.entries(capacitaciones).map(([capacitacion, cantidad]) => (
                            <tr key={`${institucion}-${capacitacion}`}>
                                <td>{institucion}</td>
                                <td>{capacitacion}</td>
                                <td>{cantidad}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Charts;
