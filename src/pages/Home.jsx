import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import csvFile from "../assets/Base_de_datos_de_al.csv";
import {
    totalIngresaron,
    totalDesertaron,
    porcentajeDesercionTotal,
    desertoresPorInstitucion
} from "../utils/dataAnalysis";
import InstitutionList from "../components/InstitutionList";
import MetricsCards from "../components/MetricsCards";
import GlobalAnalysis from "../components/GlobalAnalysis";
import "../styles/Home.css";

const Home = () => {
    const [data, setData] = useState([]);
    const [stats, setStats] = useState({});
    const navigate = useNavigate();

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
                        });
                    },
                });
            });
    }, []);

    const instituciones = useMemo(() =>
        stats.desertoresPorInstitucion ? Object.keys(stats.desertoresPorInstitucion) : []
        , [stats]);

    return (
        <div className="main-container">
            <div className='left-panel'>
                <InstitutionList instituciones={instituciones} />
            </div>
            <div className='right-panel'>
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
}

export default Home;