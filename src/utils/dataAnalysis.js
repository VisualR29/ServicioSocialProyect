import { strategies } from "../assets/Estrategias";

//
// ────────────────────────────────────────────────────────────
// FUNCIONES DE AGRUPACIÓN Y CÁLCULOS BASE
// ────────────────────────────────────────────────────────────
//

export const listaInstituciones = (data) => {
    return [...new Set(data.map(row => row["Institución"]).filter(Boolean))];
};

export const totalIngresaron = (data) =>
    data.reduce((sum, row) => sum + Number(row["Ingresaron"]), 0);

export const totalDesertaron = (data) =>
    data.reduce((sum, row) => sum + Number(row["Desertaron"]), 0);

export const porcentajeDesercionTotal = (data) => {
    const ingresaron = totalIngresaron(data);
    const desertaron = totalDesertaron(data);
    return ingresaron > 0
        ? `${((desertaron / ingresaron) * 100).toFixed(2)}%`
        : "0%";
};

export const totalInstituciones = (data) =>
    new Set(data.map(row => row["Institución"])).size;

export const totalCapacitaciones = (data) =>
    new Set(data.map(row => row["Capacitación"])).size;

//
// ────────────────────────────────────────────────────────────
// AGRUPACIÓN POR CATEGORÍAS
// ────────────────────────────────────────────────────────────
//

export const alumnosPorCapacitacion = (data) => {
    return data.reduce((acc, row) => {
        const key = row["Capacitación"];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});
};

export const desertoresPorCapacitacion = (data) => {
    return data.reduce((acc, row) => {
        if (row["Desertaron"] === "1") {
            const key = row["Capacitación"];
            acc[key] = (acc[key] || 0) + 1;
        }
        return acc;
    }, {});
};

export const desertoresPorInstitucion = (data) => {
    return data.reduce((acc, row) => {
        if (Number(row["Desertaron"]) === 1) {
            const key = row["Institución"];
            acc[key] = (acc[key] || 0) + 1;
        }
        return acc;
    }, {});
};

export const desertoresPorInstitucionYCapacitacion = (data) => {
    return data.reduce((acc, row) => {
        if (Number(row["Desertaron"]) === 1) {
            const inst = row["Institución"];
            const cap = row["Capacitación"];
            acc[inst] = acc[inst] || {};
            acc[inst][cap] = (acc[inst][cap] || 0) + 1;
        }
        return acc;
    }, {});
};

//
// ────────────────────────────────────────────────────────────
// ANÁLISIS DE CAUSAS Y ESTRATEGIAS
// ────────────────────────────────────────────────────────────
//

export const causasDesercion = (data) => {
    return data.reduce((acc, row) => {
        const causa = row["Causa de Deserción"];
        if (causa && causa !== "No aplica") {
            acc[causa] = (acc[causa] || 0) + 1;
        }
        return acc;
    }, {});
};


export const obtenerTopEstrategias = (causasObj) => {
    const listaCausas = expandirCausas(causasObj);

    const estrategiasConPuntaje = strategies.map((estrategia) => {
        const matchCount = listaCausas.filter((causa) =>
            Array.isArray(estrategia.causasMatch) &&
            (estrategia.causasMatch.includes(causa) || estrategia.causasMatch.includes("Todas"))
        ).length;

        return { ...estrategia, matchCount };
    });

    return estrategiasConPuntaje
        .filter(e => e.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)
        .slice(0, 3);
};

export const expandirCausas = (causasObj) => {
    const lista = [];
    Object.entries(causasObj).forEach(([causa, cantidad]) => {
        for (let i = 0; i < cantidad; i++) {
            lista.push(causa);
        }
    });
    return lista;
};

export const contarFrecuencia = (lista) => {
    return lista.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};


//
// ────────────────────────────────────────────────────────────
// PORCENTAJE DE DESERCIÓN POR INSTITUCIÓN
// ────────────────────────────────────────────────────────────
//

export const porcentajeDesercionPorInstitucion = (data) => {
    const instituciones = {};

    data.forEach((row) => {
        const inst = row["Institución"];
        if (!inst) return;

        const ingresaron = Number(row["Ingresaron"]);
        const desertaron = Number(row["Desertaron"]);

        if (!instituciones[inst]) {
            instituciones[inst] = { ingresaron: 0, desertaron: 0 };
        }

        instituciones[inst].ingresaron += ingresaron;
        instituciones[inst].desertaron += desertaron;
    });

    return Object.entries(instituciones).map(([name, valores]) => {
        const { ingresaron, desertaron } = valores;
        const porcentaje = ingresaron > 0 ? (desertaron / ingresaron) * 100 : 0;
        return {
            name,
            porcentaje: Number(porcentaje.toFixed(2)),
        };
    });
};

