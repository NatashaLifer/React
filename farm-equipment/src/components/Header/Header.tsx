import {FC} from 'react'
import { HeaderProps } from './types'
import HeaderMenuItem from "./HeaderMenuItem"
import './Header.scss'

const Header: FC<HeaderProps> = ({logoURL, menuItems}) => {
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
                <form className="nav__end-search">
                  <input type="search" name="search" placeholder="Search" />
                </form>
                <a href="#">
                  <img src="https://i.pravatar.cc" width="40" height="40" alt="user image" />
                </a>
                <button className="nav__end-btn btn-primary">LogIn</button>
              </div>
            </div>
          </div>
        </header>
    )
}
  
export default Header