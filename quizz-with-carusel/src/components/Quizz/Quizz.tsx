/* Написати компонент Quizz, який має наступні props-и:
questions - масив рядків з питаннями
Функціонал:
- першою на екрані зʼявляться кнопка "start quizz"
- по кліку на неї - зʼявляється перше питання зі списку, а текст кнопки змінюється на "next"
- по кліку на "next" - зʼявляється наступне питання
- коли питання закінчаться - замість кнопки "next" зʼявляється кнопка "finish"
- по кліку на "finish" - зʼявляється текст "quizz is finished"*/

import {useState} from 'react'
import Question from './Question'

const Quizz = ({questions}: {questions:string[]}) => {
    const [indexQuestionShow, setIndexQuestionShow] = useState<number>(0)
    const [isStartQuizz, setStartQuizz] = useState<boolean>(false)

    const handleQuestionChange = () => {
        setIndexQuestionShow(prevQuestion => prevQuestion + 1)
    }

    const finishQuizz = () => {
        setIndexQuestionShow(0)
        setStartQuizz(false)
    }

    return (
        <div className='show-question'>
            { !isStartQuizz && <button onClick={() => setStartQuizz(true)}>Start Quizz</button>}
            { isStartQuizz && <Question
                currentQuestion = {questions[indexQuestionShow]}
                changeQuestion={indexQuestionShow !== questions.length - 1 ? handleQuestionChange : finishQuizz}
                isLast={indexQuestionShow === questions.length - 1}
            /> }
        </div>
    )
}

export default Quizz
