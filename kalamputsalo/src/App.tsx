// import {useState, useEffect} from "react"
// import { Home, About } from './pages'
import Header from "./components/Header/Header"
import logo from "./assets/bird-logo.avif"
import './App.scss'

function App() {
    const menuItems = [
    {title:'Home', link:'/'},
    {title:'About', link:'/about'},
    {title:'Team', link:'/team'},
    {title:'Contacts', link:'/contacts'},
  ]

  return (
    <>
      <Header logoURL={logo} menuItems={menuItems}/>
      <div className="wrapper"> 
        <section className="first">
          <h2> First section </h2>
        </section>
        <div className="second">
          <h2> Second section </h2>
        </div>
      </div>
      {/* <Home/> */}
    </>
  )
}

export default App
