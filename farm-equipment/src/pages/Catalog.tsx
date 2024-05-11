import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductProps } from './types'
import './Catalog.scss'

const Catalog = () => {
    const [products, setProducts] = useState([])
    useEffect (() => {
        fetch('./catalog.json').then(r => r.json()).then(dataCatalog => {
            setProducts(dataCatalog)
        })
    },[])

    return (
        <div className='wrapper'>
            <h2>All Products</h2>
            <div className='products'>

                {products.map((elem: ProductProps) => (
                <Link
                    key={`${elem.id}`}
                    to={`/catalog/${elem.id}`
                }> 
                    <li className="products__item">
                        <p className="products__item-title"> {elem.title} </p>
                        <p className="products__item-price"> ${elem.price} </p>
                        <button className="products__item-buy"> BUY </button>
                    </li>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default Catalog