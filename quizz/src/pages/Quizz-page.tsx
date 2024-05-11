import { Quizz, navigate } from "../components"
import { useContext } from 'react';
import { quizzNameContext } from "./Home"

/* додати роутінг, а саме:
сторінка Home - сторінка з усіма картками всіх створених питань. 
картка - заголовок/назва опитування + кнопка "перейти до опитування"
сторінка Quizz - тут відображається сторінка з компонентом конкретного квіза. 
на цій сторінці має бути кнопка "повернутись на головну" */

// const QuizzPage = ({title}: {title:string}) => {
const QuizzPage = () => {

  const nameQuizz = useContext(quizzNameContext);
  console.log(nameQuizz);
  
  const questions = {
      react: [
        "Що таке JSX?",
        "Наведи основні відмінності між класовим та функціональним компонентом.",
        "Наведи основні відмінності JSX від HTML.",
        "Що таке props у React?",
        "Як можна передати props від батьківського компоненту до дочірнього?",
      ],
      js: [
        "Що таке JS?",
        "Наведи основні відмінності між JS від TS",
        "Які функції є в JS?",
      ],
      ts: [
        "Що таке TS?",
        "Наведи основні відмінності між JS та TS",
        "Як задати тип елементу?",
      ],
  }


  return (
    <div className="quizz">
        <button className="btn-return-home" onClick={() => navigate('/')}>
            return Home
        </button>
        <h1 className='quizz__title'>{nameQuizz}</h1>
            <Quizz questions = {questions.react} />
    </div>
  )
}

export default QuizzPage