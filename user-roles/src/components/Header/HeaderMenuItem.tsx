import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MenuItemProps } from "./types"

const HeaderMenuItem: FC<MenuItemProps> = ({title, link}) => {  
    return (
        <li>
            <Link className="nav__start-menu-link" to={link}>
                {title}
            </Link>
        </li>
    )
}

export default HeaderMenuItem