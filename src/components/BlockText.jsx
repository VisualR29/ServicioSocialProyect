const BlockText = ({ title, children, alignLeft = false }) => {
    return (
        <div className={`section${alignLeft ? ' align-left' : ''}`}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
};

export default BlockText;
