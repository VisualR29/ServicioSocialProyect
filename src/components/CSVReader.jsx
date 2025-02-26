import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import csvFile from "../assets/Base_de_datos_de_alumnos.csv"

const CSVReader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(csvFile) // Reemplaza con la ruta real del archivo
            .then((response) => response.text())
            .then((text) => {
                console.log("Gargo")
                Papa.parse(text, {
                    header: true, // Si tiene encabezados
                    skipEmptyLines: true,
                    complete: (result) => setData(result.data),
                });
            })
            .catch((error) => console.error("Error", error));
    }, []);

    return (
        <div>
            <h2>Lista de Alumnos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Institución</th>
                        <th>Capacitación</th>
                        <th>Ingresaron</th>
                        <th>Desertaron</th>
                        <th>Causa de Deserción</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row["Nombre Completo"]}</td>
                            <td>{row["Institución"]}</td>
                            <td>{row["Capacitación"]}</td>
                            <td>{row["Ingresaron"]}</td>
                            <td>{row["Desertaron"]}</td>
                            <td>{row["Causa de Deserción"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CSVReader;