const BlockText = ({ title, children, alignLeft }) => {
    return (
        <div className={alignLeft ? "align-left section" : "section"}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default BlockText;