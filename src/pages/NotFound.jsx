import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container main-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-text">Página no encontrada</p>
            <Link to="/" className="notfound-button">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;
