import {useState, useEffect} from "react"
import Header from "./components/Header/Header"
import Todo from "./components/Todo/Todo"
import Modal from "./components/Modal/Modal"
import Timer, {DIRECTION} from "./components/Timer/Timer"
import logo from "./assets/bird-logo.avif"
import './App.scss'

function App() {
  const [counterValue, setCounterValue] = useState(0)

  const [modalVisible, setModalVisible] = useState(JSON.parse(localStorage.getItem('isOpen') || 'false'))

  // - в батьківському компоненті зберігати всі маніпуляції зі стейтом `isOpen` в `localStorage`

  useEffect(() => {
    localStorage.setItem('isOpen', JSON.stringify(modalVisible))
  }, [modalVisible])
  
  const menuItems = [
    {title:'Home', link:'#'},
    {title:'Contacts', link:'#'},
    {title:'About Us', link:'#'},
    {title:'Comments', link:'#'},
  ]

  return (
    <>
      <Header logoURL={logo} menuItems={menuItems}/>
      <div className="modal-open">
        <button className="modal-open-btn"
          onClick={() => setModalVisible((prev:any) => !prev)}
        > open modal </button>
      </div>

      {modalVisible && <Modal isOpen={setModalVisible}>
        <h2>Gogi loves to code</h2>
        <Timer  
          startValue={7} 
          endValue={1} 
          step={1} 
          direction={DIRECTION.DECREMENT} 
          endTimeAction={() => setModalVisible(false)}
        />
      </Modal>}
      
      <Todo />

      <div className="card">
        <p className="card__value">{counterValue}</p>
        <div className="card__buttons">
          <button onClick={() => setCounterValue((prevCounterValue) => prevCounterValue + 1)}>
            increase the value
          </button>
          <button onClick={() => setCounterValue((prevCounterValue) => prevCounterValue - 1)}>
            decrease the value
          </button>
        </div>
        <p className="card__read-the-docs">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
