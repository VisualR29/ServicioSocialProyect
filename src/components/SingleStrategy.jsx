import "../styles/Plan.css";

const SingleStrategy = ({ problems, description, timeline }) => {
    return (
        <div className="accordion-item">
            <p className="accordion-description">{description}</p>

            <strong>Problemáticas:</strong>
            <ul>
                {problems.map((problem, index) => (
                    <li key={index}>{problem}</li>
                ))}
            </ul>

            <table className="timeline-table">
                <thead>
                    <tr>
                        <th>Actividades</th>
                        <th>Tiempo</th>
                        <th>Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    {timeline.map(({ activity, time, responsible }, index) => (
                        <tr key={index}>
                            <td>{activity}</td>
                            <td>{time}</td>
                            <td>{responsible}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SingleStrategy;
