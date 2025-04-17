import { useState, useEffect } from "react";
import Papa from "papaparse";

// ─── Assets ─────────────────────────────────────────────
import csvFile from "../assets/Base_datos_final.csv";

// ─── Utils ──────────────────────────────────────────────
import {
    totalIngresaron,
    totalDesertaron,
    porcentajeDesercionTotal,
    desertoresPorInstitucion,
    listaInstituciones,
} from "../utils/dataAnalysis";

// ─── Componentes ────────────────────────────────────────
import InstitutionList from "../components/InstitutionList";
import MetricsCards from "../components/MetricsCards";
import GlobalAnalysis from "../components/GlobalAnalysis";

// ─── Estilos ────────────────────────────────────────────
import "../styles/Home.css";

const Home = () => {
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
                        const parsedData = result.data.filter((row) => row["Institución"]);

                        const ingresaron = totalIngresaron(parsedData);
                        const desertaron = totalDesertaron(parsedData);

                        setData(parsedData);
                        setStats({
                            totalIngresados: ingresaron,
                            totalDesertores: desertaron,
                            porcentajeDesercion: porcentajeDesercionTotal(parsedData),
                            desertoresPorInstitucion: desertoresPorInstitucion(parsedData),
                            listaInstituciones: listaInstituciones(parsedData),
                        });
                    },
                });
            });
    }, []);

    return (
        <div className="main-container">
            <div className="left-panel">
                <InstitutionList instituciones={stats.listaInstituciones || []} />
            </div>

            <div className="right-panel">
                <GlobalAnalysis
                    desertoresPorInstitucion={stats.desertoresPorInstitucion || {}}
                    totalIngresados={stats.totalIngresados || 0}
                    totalDesertores={stats.totalDesertores || 0}
                    data={data}
                />
                <MetricsCards
                    totalIngresados={stats.totalIngresados}
                    totalDesertores={stats.totalDesertores}
                    porcentajeDesercion={stats.porcentajeDesercion}
                />
            </div>
        </div>
    );
};

export default Home;
