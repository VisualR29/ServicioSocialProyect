import React from 'react';
import '../App.css';
import CSVReader from '../components/CSVReader';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <CSVReader />
            </header>
        </div>
    );
}

export default Home;