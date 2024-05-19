// Product - "/catalog/:id" - сторінка товару. має містити фото товару, назву, ціну, опис та кнопку "купити"

import { useState, useEffect } from  'react'
import { useParams } from 'react-router-dom'
import { ProductProps } from '../types'
import './Product.scss'

const Product = () => {
    const {id} = useParams()

    const [currentProduct, setProducts] = useState<ProductProps>()

    useEffect(() => {
        fetch('../catalog.json').then(res => res.json()).then(data => {
            setProducts(data.find((elem: ProductProps) => elem.id === id ))
        })
    },[])
    
    
    return (
        <div className='wrapper'>
            <h2>Product</h2>
            {currentProduct && (  
                <div className='product-card'>
                    <img src="https://i.pravatar.cc" className='product-card__img' alt="image equipment" />
                    <div className='product-card__container'>
                        <h2 className='product-card__title'> {currentProduct.title} </h2>
                        <p className='product-card__description'> {currentProduct.description} </p>
                        <p className='product-card__price'> ${currentProduct.price} </p>
                        <button className='product-card__btn-buy'> Buy </button>
                    </div>
                </div>
            )}
        </div>
    )
}
    
export default Product