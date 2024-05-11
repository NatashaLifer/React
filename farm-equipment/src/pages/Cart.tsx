// Cart - "/cart" - список товарів які користувач вибрав для покупки. кожен товар має мати кнопку "видалити"
import './Cart.scss'
import { ProductProps } from './types'


const Cart = () => {
    let cartList:ProductProps[] = []
        const storage = localStorage.getItem('selectedProds')//достаємо по ключу з localStorage товари, що там є
        if(storage){
            cartList = JSON.parse(storage)
        }
    
    return (
        <div className='wrapper'>
            <div className='cart'>
                <h2>Cart</h2>
                {cartList.map((elem: ProductProps) => (
                    <li className="cart__item" key={`${elem.id}`}>
                        <p className="cart__item-title">{elem.title}</p>
                        <p className="cart__item-price">${elem.price}</p>
                        <button className="cart__item-btn-delete"> Delete </button>
                    </li>   
                ))}
                <p className='cart__sum'>SUM: $10000</p>
                <button className='cart__btn-buy'>Buy this products</button>
            </div>   
        </div>
    )
}

export default Cart