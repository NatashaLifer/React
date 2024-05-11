import Router from './components/Router/Router'
import { Home, About} from './pages'

// import Quizz from './components/Quizz/Quizz'
// import Carusel from './components/Carusel/Carusel'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <Router routesList={[
        { path: "/", component: Home },
        { path: "/about", component: About },
        // { path: "/questions", component: Quizz },
      ]}/>
    </>
  )
}

export default App
