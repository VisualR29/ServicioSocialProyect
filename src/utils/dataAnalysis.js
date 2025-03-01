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

export const porcentajeDesercionTotal = (data) => {
    const totalIngresaron = data.reduce((sum, row) => sum + Number(row["Ingresaron"]), 0);
    const totalDesertaron = data.reduce((sum, row) => sum + Number(row["Desertaron"]), 0);

    return totalIngresaron > 0 ? ((totalDesertaron / totalIngresaron) * 100).toFixed(2) + "%" : "0%";
};

export const desertoresPorInstitucion = (data) => {
    return data.reduce((acc, row) => {
        if (Number(row["Desertaron"]) === 1) {
            acc[row["Institución"]] = (acc[row["Institución"]] || 0) + 1;
        }
        return acc;
    }, {});
};

export const desertoresPorInstitucionYCapacitacion = (data) => {
    return data.reduce((acc, row) => {
        if (Number(row["Desertaron"]) === 1) {
            if (!acc[row["Institución"]]) {
                acc[row["Institución"]] = {}; 
            }
            acc[row["Institución"]][row["Capacitación"]] =
                (acc[row["Institución"]][row["Capacitación"]] || 0) + 1;
        }
        return acc;
    }, {});
};
