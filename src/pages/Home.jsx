import CSVReader from '../components/CSVReader';
import IntitutionList from '../components/InstitutionList';
import '../styles/Home.css';

function Home() {
    return (
        <div className="main-container">
            <IntitutionList />
            {/* <CSVReader /> */}
        </div>
    );
}

export default Home;