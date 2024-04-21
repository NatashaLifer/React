const ChildComponent = ({title, newTitle}: {title:string, newTitle:any}) => {
    return (
        <>
        <h1 className="main-title">{title}</h1> 
        <button onClick={newTitle}>  
            change title
        </button>
        </>
    )
}

export default ChildComponent