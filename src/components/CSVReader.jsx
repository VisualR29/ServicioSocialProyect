import { useState, useEffect } from "react";
import Papa from "papaparse";
import csvFile from "../assets/Base_de_datos_de_alumnos.csv"
import { alumnosPorCapacitacion, causasDesercion, totalDesertaron, totalIngresaron } from "../utils/dataAnalysis";

const CSVReader = () => {
    const [data, setData] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((text) => {
                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        setData(result.data);
                        setStats({
                            totalIngresaron: totalIngresaron(result.data),
                            totalDesertaron: totalDesertaron(result.data),
                            alumnosPorCapacitacion: alumnosPorCapacitacion(result.data),
                            causasDesercion: causasDesercion(result.data),
                        });
                    },
                });
            });
    }, []);

    return (
        <div>
            <h2>Estadísticas</h2>
            <p><strong>Total de alumnos ingresados:</strong> {stats.totalIngresaron}</p>
            <p><strong>Total de alumnos desertaron:</strong> {stats.totalDesertaron}</p>
            <h3>Alumnos por Capacitación</h3>
            <ul>
                {stats.alumnosPorCapacitacion &&
                    Object.entries(stats.alumnosPorCapacitacion).map(([capacitacion, cantidad]) => (
                        <li key={capacitacion}>{capacitacion}: {cantidad}</li>
                    ))}
            </ul>
            <h3>Causas de Deserción</h3>
            <ul>
                {stats.causasDesercion &&
                    Object.entries(stats.causasDesercion).map(([causa, cantidad]) => (
                        <li key={causa}>{causa}: {cantidad}</li>
                    ))}
            </ul>
        </div>
    );
};

export default CSVReader;