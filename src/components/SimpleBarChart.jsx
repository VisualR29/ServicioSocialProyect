import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
    "#A28BFE", "#FF6666", "#FFB6C1", "#4DD0E1", "#AED581"
];

const SimpleBarChart = ({
    data,
    dataKey = "value",
    nameKey = "name",
    height = 300,
    label = true,
    colorSet = COLORS,
    xAxisTickFontSize = 11,
    rotateTicks = false
}) => {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
                <XAxis
                    dataKey={nameKey}
                    interval={0}
                    angle={rotateTicks ? -30 : 0}
                    textAnchor={rotateTicks ? "end" : "middle"}
                    tick={{ fontSize: xAxisTickFontSize, fill: "#ccc" }}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey={dataKey} label={label ? { position: "top", fill: "#ccc", fontSize: 12 } : false}>
                    {data.map((_, index) => (
                        <Cell key={`bar-${index}`} fill={colorSet[index % colorSet.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SimpleBarChart;
