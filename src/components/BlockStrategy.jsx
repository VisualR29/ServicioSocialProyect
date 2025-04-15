const BlockStrategy = ({ title, problems, description, activities }) => {
    return (
        <div className="strategy-card">
            <h2 className="strategy-title">{title}</h2>
            <p className="strategy-description">{description}</p>
            <h4>Problemáticas que atiende:</h4>
            <ul>
                {problems.map((problem, index) => (
                    <li key={index}>{problem}</li>
                ))}
            </ul>
            <h4>Actividades Clave:</h4>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    )
}


export default BlockStrategy;
