const CustomLegend = ({ payload, maxItems = 4 }) => {
    if (!payload) return null;

    const topItems = [...payload]
        .sort((a, b) => b.value - a.value)
        .slice(0, maxItems);

    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "10px" }}>
            {topItems.map((entry, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.85em",
                        color: entry.color
                    }}
                >
                    <div
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: entry.color,
                            marginRight: 6
                        }}
                    />
                    <span>{entry.payload?.name}</span>
                </div>
            ))}
        </div>
    );
};

export default CustomLegend;
