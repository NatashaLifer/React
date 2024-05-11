const ChildComponent = ({title, changeTitle}: {title:string, changeTitle:any}) => {
    return (
        <>
        <h1 className="main-title">{title}</h1> 
        <button onClick={changeTitle}>  
            change title
        </button>
        </>
    )
}

export default ChildComponent