import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProductProps } from '../types'
import './Products.scss'

const Products = () => {
    const products: any = useLoaderData()
    console.log(products);

    return (
        <div className='wrapper'>
            <h2>All Products</h2>
            <div className='products'>
                {products.map((elem: ProductProps) => (
                <Link
                    key={`${elem.id}`}
                    to={`/products/${elem.id}`
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

export default Products