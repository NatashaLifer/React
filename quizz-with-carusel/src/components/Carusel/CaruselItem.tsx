import {FC} from 'react'
import {CaruselItemProps} from './types'
// import reactLogo from '../../../assets/vite.svg'

const CaruselItem:FC<CaruselItemProps> = ({text,imgURL,title}) => {
  return (
    <div className='carusel__item'>
        <h1 className="carusel__item-title">{title}</h1>
        <img src={imgURL} className="carusel__item-image" alt="picture" />
        <p className="carusel__item-text">{text}</p>
    </div>
  )
}

export default CaruselItem