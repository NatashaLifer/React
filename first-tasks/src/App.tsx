import {useState} from "react"
import Header from "./components/Header/Header"
import Todo from "./components/Todo/Todo"
import Modal from "./components/Modal/Modal"
import logo from "./assets/bird-logo.avif"
import './App.scss'

function App() {
  const [counterValue, setCounterValue] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const menuItems = [
    {title:'Home', link:'#'},
    {title:'Contacts', link:'#'},
    {title:'About Us', link:'#'},
    {title:'Comments', link:'#'},
  ]

  return (
    <>
      <Header logoURL={logo} menuItems={menuItems}/>

      <button className="modal-close-btn"
        onClick={() => setModalVisible((prev) => !prev)}
      > X </button>
      {modalVisible && <Modal>
        <p>Gogi loves to code</p>
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
