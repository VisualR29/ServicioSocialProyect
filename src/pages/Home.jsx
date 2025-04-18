import { useState, useEffect } from "react";
import Papa from "papaparse";

import csvFile from "../assets/Base_datos_final.csv";
import {
    totalIngresaron,
    totalDesertaron,
    porcentajeDesercionTotal,
    desertoresPorInstitucion,
    listaInstituciones
} from "../utils/dataAnalysis";

import InstitutionList from "../components/InstitutionList";
import MetricsCards from "../components/MetricsCards";
import GlobalAnalysis from "../components/GlobalAnalysis";

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
                        const parsedData = result.data.filter(row => row["Institución"]);
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
            <div className="home">
                {/* Panel izquierdo */}
                <div className="left-panel">
                    <InstitutionList instituciones={stats.listaInstituciones || []} />
                </div>

                {/* Panel derecho */}
                <div className="right-panel">
                    {/* Tarjetas métricas */}
                    <MetricsCards
                        totalIngresados={stats.totalIngresados}
                        totalDesertores={stats.totalDesertores}
                        porcentajeDesercion={stats.porcentajeDesercion}
                    />

                    {/* Gráficas horizontalmente en desktop */}
                    <div className="graphs-row">
                        <GlobalAnalysis
                            totalIngresados={stats.totalIngresados || 0}
                            totalDesertores={stats.totalDesertores || 0}
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
