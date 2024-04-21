import './App.css'
import ParentComponent from './components/MyComponent/ParentComponent'
import Accordion from './components/Accordion/Accordion'

function App() {
  const listItems = [
    {title:'First Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab laborum atque nemo qui nihil, ullam corrupti. Voluptatum, debitis recusandae!'},
    {title:'Second Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
    {title:'Third Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
    {title:'Forth Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
  ]

  return (
    <>
      <ParentComponent />
      <Accordion listItems={listItems}/>
    </>
  )
}

export default App
