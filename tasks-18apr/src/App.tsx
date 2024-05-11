import './App.css'
import ParentComponent from './components/MyComponent/ParentComponent'
import Accordion from './components/Accordion/Accordion'
import Tabs from './components/Tabs/Tabs'

function App() {
  const listItems = [
    {title:'First Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab laborum atque nemo qui nihil, ullam corrupti. Voluptatum, debitis recusandae!'},
    {title:'Second Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
    {title:'Third Title', description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
  ]
  const tabsContent = [
    {title:'TAB 1', content:<p>FIRST, ipsum dolor sit amet consectetur adipisicing elit.</p>},
    {title:'TAB 2', content:<p>SECOND, ipsum dolor sit amet consectetur adipisicing elit.</p>},
    {title:'TAB 3', content:<p>THIRD, ipsum dolor sit amet consectetur adipisicing elit.</p>},
  ]



  return (
    <>
      <ParentComponent />
      <Accordion listItems={listItems}/>
      <Tabs tabsContent={tabsContent}/>
    </>
  )
}

export default App
