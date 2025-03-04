import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import csvFile from '../assets/Base_de_datos_de_al.csv'
import { listaInstituciones } from "../utils/dataAnalysis";
import '../styles/IntitutionList.css'

const IntitutionList = () => {
    const [institutions, setInstitutions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((data) => {
                const parsedData = Papa.parse(data, { header: true }).data;
                setInstitutions(listaInstituciones(parsedData));
            });
    }, []);

    const handleSelect = (institution) => {
        navigate(`/int/${encodeURIComponent(institution)}`);
    };

    return (
        <div className="institution-container">
            <h2>Selecciona una institución</h2>
            {institutions.length > 0 ? (
                <ul className="institution-list">
                    {institutions.map((institution, index) => (
                        <li key={index} className="institution-item">
                            <button className="institution-button" onClick={() => handleSelect(institution)}>{institution}</button>
                        </li>
                    ))}
                </ul>
            ) : (
                    <p className="loading-message">Cargando instituciones...</p>
            )}
        </div>
    );
};

export default IntitutionList