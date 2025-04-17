import { useNavigate } from "react-router-dom";
import "../styles/InstitutionList.css";

const InstitutionList = ({ instituciones }) => {
    const navigate = useNavigate();

    const handleSelect = (institution) => {
        navigate(`/ins/${encodeURIComponent(institution)}`);
    };

    return (
        <div className="institution-container">
            <h2>Selecciona una institución</h2>

            {instituciones.length > 0 ? (
                <ul className="institution-list">
                    {instituciones.map((institution, index) => (
                        <li key={index} className="institution-item">
                            <button
                                className="institution-button"
                                onClick={() => handleSelect(institution)}
                            >
                                {institution}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="loading-message">Cargando instituciones...</p>
            )}
        </div>
    );
};

export default InstitutionList;
