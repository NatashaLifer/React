import { useState, useEffect } from  'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProductProps } from './types'
import './Product.scss'

const Product = () => {
    const {id} = useParams()

    const [currentProduct, setProducts] = useState<ProductProps>()

    useEffect(() => {
        fetch('../catalog.json').then(res => res.json()).then(data => {
            setProducts(data.find((elem: ProductProps) => elem.id === id ))
        })
    },[])
    
    const addToLocalStorage = (key:string, prod:ProductProps) => {
        let cartList:ProductProps[] = []
        const storage = localStorage.getItem(key)
        if(storage){
            const storageData = JSON.parse(storage) 
            localStorage.setItem(key, JSON.stringify([...storageData, prod]))
        } else {
            cartList = [prod]
            localStorage.setItem(key, JSON.stringify(cartList))
        }
    }
    
    return (
        <div className='wrapper'>
            {currentProduct && (  
                <div className='product-card'>
                    <img src="https://i.pravatar.cc" className='product-card__img' alt="image equipment" />
                    <div className='product-card__container'>
                        <h2 className='product-card__title'> {currentProduct.title} </h2>
                        <p className='product-card__description'> {currentProduct.description} </p>
                        <p className='product-card__price'> ${currentProduct.price} </p>
                        <Link to='/cart'
                            className='product-card__btn-buy'
                            onClick={() => {
                                addToLocalStorage ("selectedProds", currentProduct)
                            }}
                        > Buy </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
    
export default Product