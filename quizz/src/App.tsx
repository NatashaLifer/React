import Router from './components/Router/Router'
import { Home, About, QuizzPage} from './pages'
import './App.css'


function App() {
  return (
    <>
      <Router routesList={[
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/questions", component: QuizzPage },
        // { path: "/questions", component: <QuizzPage title = 'react'/> },
      ]}/>
    </>
  )
}

export default App
