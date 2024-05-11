import { FC } from 'react'
import { MenuItemProps } from "./types"

const HeaderMenuItem: FC<MenuItemProps> = ({title, link}) => {  
    return (
        <li>
            <a className="nav__start-menu-link" href= {link}>
                {title}
            </a>
        </li>
    )
}

export default HeaderMenuItem