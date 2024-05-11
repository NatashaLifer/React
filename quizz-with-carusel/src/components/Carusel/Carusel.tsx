 import {FC, useState} from 'react'
import CaruselItem from './CaruselItem'
import {CaruselProps} from './types'


const Carusel:FC<CaruselProps>=({items}) => {
    const [indexItem, setIndexItem] = useState(0)
    const currentItem = items[indexItem]

    return (
        <div className='carusel'>
            <div>
                <CaruselItem 
                    title={currentItem.title}
                    text={currentItem.text}
                    imgURL={currentItem.imgURL}
                />
                <button onClick={() => setIndexItem((prevIndex)=>{
                        if (prevIndex === 0) {
                            return items.length - 1
                        } else {
                          return prevIndex - 1
                        }
                    })}> Prev </button>
                <button onClick={() => setIndexItem((prevIndex)=>{
                        if (prevIndex === items.length - 1) {
                          return 0
                        } else {
                          return prevIndex + 1
                        }
                    })}> Next </button>
            </div>
        </div>
    )

}

export default Carusel