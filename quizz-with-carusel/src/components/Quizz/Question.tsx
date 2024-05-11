const Question = ({currentQuestion, changeQuestion, isLast}: {currentQuestion:string, changeQuestion:() => void, isLast: boolean}) => {
    return (
        <>
            <h2 className="question">{currentQuestion}</h2> 
            <button onClick={changeQuestion}>  
                {
                   isLast ? "finish quizz" : "next question"
                }
            </button>
        </>
    )
}

export default Question