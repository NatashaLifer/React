import { useState } from "react"
import { navigate } from "../components"

import { createContext } from 'react';
export const quizzNameContext = createContext('');

const Home = () => {
 
  const [titleQuizz, setTitleQuizz] = useState<string>('JavaScript')

  return ( 
    <quizzNameContext.Provider value = {titleQuizz}>

      <button onClick={() => navigate('/about')}>
        go to About
      </button>

      <div className="card-wrapper">
        <div className="card">
          <h2 className="card__title">React</h2>
          <button className="card__btn-start" onClick={() => {
            setTitleQuizz('react')
            navigate('/questions')
          }}>
            Start Quizz
          </button> 
        </div>

        <div className="card">
          <h2 className="card__title">TypeScript</h2>
          <button className="card__btn-start" onClick={() => {
            setTitleQuizz('ts')
            navigate('/questions')
          }}>
            Start Quizz
          </button> 
        </div>

        <div className="card">
          <h2 className="card__title">JavaScript</h2>
          <button className="card__btn-start" onClick={() => {
            setTitleQuizz('js')
            navigate('/questions')
          }}>
            Start Quizz
          </button>
        </div>
      </div>
      
    </quizzNameContext.Provider>
  )
}

export default Home
