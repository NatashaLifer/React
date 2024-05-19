import {FC, useState, useEffect} from 'react'
import { HeaderProps } from './types'
import HeaderMenuItem from "./HeaderMenuItem"
import { RoleBtnsProps } from './types'
import './Header.scss'

const Header: FC<HeaderProps> = ({logoURL, menuItems, roleBtns}) => {
  const [activeBtnIndex, setActiveBtnIndex] = useState<number>(2)

  useEffect(() => {
    if(activeBtnIndex === 2) {
      localStorage.setItem('activeRole', JSON.stringify('guest'))
    } else if (activeBtnIndex === 1) {
      localStorage.setItem('activeRole', JSON.stringify('user'))
    } else {
      localStorage.setItem('activeRole', JSON.stringify('admin'))
    }
  }, [activeBtnIndex])

  const chooseActiveBtn = (index: number) => {
    setActiveBtnIndex(index)
  }
    return (
        <header className="nav">
          <div className="container">
            <div className="nav__start">
              <a className="nav__start-logo" href="#">
                  <img src={logoURL} width="60" height="65" alt="Inc Logo" />
              </a> 
              <nav className="nav__start-menu">
                <ul className="nav__start-menu-bar">
                  {menuItems.map((elem, index) => (
                    <HeaderMenuItem
                      key={`${elem.title}-${index}`}
                      title={elem.title}
                      link={elem.link}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <div className="nav__end">
              <div className="nav__end-right-container">
                {roleBtns.map((elem:RoleBtnsProps, index:number) => (
                  <button
                    className={`nav__end-btn btn-primary ${activeBtnIndex===index ? 'active' : ''}`}
                    key={`${elem.title}-${index}`} 
                    onClick={() => {
                      chooseActiveBtn(index) 
                    }}
                  >
                    {elem.title}
                  </button>   
                ))}    
              </div>
            </div>
          </div>
        </header>
    )
}
  
export default Header