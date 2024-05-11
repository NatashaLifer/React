// import Router from '../components/Router/Router'
import Quizz from '../components/Quizz/Quizz'
// import Question from './components/Quizz/Question'
import Carusel from '../components/Carusel/Carusel'


/* додати роутінг, а саме:
сторінка Home - сторінка з усіма картками всіх створених питань. 
картка - заголовок/назва опитування + кнопка "перейти до опитування"
сторінка Quizz - тут відображається сторінка з компонентом конкретного квіза. 
на цій сторінці має бути кнопка "повернутись на головну" */

const Home = () => {
  // const [visibleQuestion, setVisibleQuestion] = useState(false)
  const questions = [
    "Що таке JSX?",
    "Наведи основні відмінності між класовим та функціональним компонентом.",
    "Наведи основні відмінності JSX від HTML.",
    "Що таке props у React?",
    "Як можна передати props від батьківського компоненту до дочірнього?",
  ]

  const carusel = [
    // {title: "React0", text: "context0", imgURL: "./src/assets/react.svg"},
    {title: "React", text: "context1", imgURL: "../public/react.svg"},
    {title: "Vite", text: "context2", imgURL: "./src/assets/vite.svg"},
    {title: "Item3", text: "context3", imgURL: "https://placehold.co/100x70/000000/FFFFFF/png"},
]

  return (
    <>
      
      <Carusel items = {carusel}/>
      
      <div className="card">
        <Quizz questions = {questions} />
      </div>
      <p className="read-the-docs">
        Click on the React logos to learn more
      </p>
    </>
  )
}

export default Home
