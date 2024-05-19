import { Outlet } from "react-router-dom"
import Header from '../components/Header/Header'

import logo from '../assets/bird-logo.avif'
import './template.scss'

const PageTemplate = ({role}:{role:string}) => {
    const roleBtns = [
        {title:'admin'},
        {title:'user'},
        {title:'guest'},
    ]

    let menuItems = [
        {title:'Home', link:'/'},
        {title:'Login', link:'/login'},
        {title:'Register', link:'/register'},
    ]
    
    if (role === 'admin') {
        menuItems = [
            {title:'Home', link:'/'},
            {title:'Users', link:'/users'},
            {title:'Sessions', link:'/sessions'},
        ]
    } else if (role === 'user') {
        menuItems = [
            {title:'Home', link:'/'},
            {title:'Products', link:'/products'},
            {title:'Product', link:'/products/:id'},
        ]
    }
    return (
        <>
            <Header logoURL={logo} menuItems={menuItems} roleBtns={roleBtns}/>
            <Outlet />
        </>
    )
}

export default PageTemplate
