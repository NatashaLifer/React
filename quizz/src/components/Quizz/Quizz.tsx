import {useState} from 'react'
import Question from './Question'

const Quizz = ({questions}: {questions:string[]}) => {
    const [indexQuestionShow, setIndexQuestionShow] = useState<number>(0)
    const [isStartQuizz, setStartQuizz] = useState<boolean>(true)

    const handleQuestionChange = () => {
        setIndexQuestionShow(prevQuestion => prevQuestion + 1)
    }

    const finishQuizz = () => {
        setIndexQuestionShow(0)
        setStartQuizz(false)
    }

    return (
        <div className='show-question'>
            { isStartQuizz && <Question
                currentQuestion = {questions[indexQuestionShow]}
                changeQuestion={indexQuestionShow !== questions.length - 1 ? handleQuestionChange : finishQuizz}
                isLast={indexQuestionShow === questions.length - 1}
            /> }
            { !isStartQuizz && 
            <div>
                <h3> Бажаєте пройти опитування ще раз?</h3>
                <button onClick={() => setStartQuizz(true)}>YES</button>
            </div>
            }
        </div>
    )
}

export default Quizz
