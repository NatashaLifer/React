/* створити роутінг для інтернет магазину фермерського обладнання.

хедер та футер на кожній сторінці мають бути однаковими

хедер - містить посиланя на всі сторінки, включно з головною. 
для посилання на сторінку корзини використовувати піктограму корзини 
футер - просто напис з копірайтом та поточним роком

Home - "/" - з кількома прямокутникам, що символізують секції лендінгу
Catalog - "/catalog" - список товарів. кожен товар має мати назву, ціну та кнопку "купити"
Product - "/catalog/:id" - сторінка товару. має містити фото товару, назву, ціну, опис та кнопку "купити"
Cart - "/cart" - список товарів які користувач вибрав для покупки. кожен товар має мати кнопку "видалити"
список товарів можна зберігати в json файлі в теці public. дані з нього отримувати за допомогою fetch всередині хуку useEffect */

import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

import logo from "./assets/bird-logo.avif"
import './App.scss'

function App() {
    const menuItems = [
    {title:'Home', link:'/'},
    {title:'Catalog', link:'/catalog'},
    {title:'Product', link:'/catalog/:id'},
    {title:'Cart', link:'/cart'},
  ]

  return (
    <>
      <Header logoURL={logo} menuItems={menuItems}/>
      <Outlet />
      <footer> Copyright © 2024 My farm company. All rights reserved. </footer>
    </>
  )
}

export default App
