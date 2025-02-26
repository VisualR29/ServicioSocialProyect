export const totalIngresaron = (data) => {
    return data.reduce((sum, row) => sum + Number(row["Ingresaron"]), 0);
};

export const totalDesertaron = (data) => {
    return data.reduce((sum, row) => sum + Number(row["Desertaron"]), 0);
};

export const alumnosPorCapacitacion = (data) => {
    return data.reduce((acc, row) => {
        acc[row["Capacitación"]] = (acc[row["Capacitación"]] || 0) + 1;
        return acc;
    }, {});
};

export const causasDesercion = (data) => {
    return data.reduce((acc, row) => {
        if (row["Causa de Deserción"] !== "No aplica") {
            acc[row["Causa de Deserción"]] = (acc[row["Causa de Deserción"]] || 0) + 1;
        }
        return acc;
    }, {});
};
