import GlobalAnalysis from '../components/GloablAnalysis';
import IntitutionList from '../components/InstitutionList';
import '../styles/Home.css';

function Home() {
    return (
        <div className="main-container">
            <div className='left-panel'>
                <IntitutionList />
            </div>
            <div className='right-panel'>
                <GlobalAnalysis />
            </div>
        </div>
    );
}

export default Home;