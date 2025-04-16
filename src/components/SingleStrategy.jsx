import '../styles/Plan.css';

const SingleStrategy = ({ problems, description, timeline }) => {
    return (
        <div className='accordion-item'>
            <p className='accordion-description'>{description}</p>
            <strong>Problemáticas:</strong>
            <ul>{problems.map((p, i) => <li key={i}>{p}</li>)}</ul>
            <table className='timeline-table'>
                <thead>
                    <tr>
                        <th>Actividades</th>
                        <th>Tiempo</th>
                        <th>Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    {timeline.map((row, i) => (
                        <tr key={i}>
                            <td>{row.activity}</td>
                            <td>{row.time}</td>
                            <td>{row.responsible}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SingleStrategy;
