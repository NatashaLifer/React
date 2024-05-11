// Task 2
// Напишіть компонент Accordion який приймає title та description.
// На екрані за замовчуванням показується тільки title. 
// По кліку на тайтл - відображається/ховається description 

import { FC  } from 'react'
import { AccProps } from './types'
import AccordionItem from "./AccordionItem"
import './Accordion.css'

const Accordion: FC<AccProps> = ({listItems}) => {
    
    return (
        <>
            <ul className='accordion'>
                {listItems.map((elem, index) => (
                    <AccordionItem
                      key={`${elem.title}-${index}`}
                      title={elem.title}
                      description={elem.description}
                    />
                ))}
                
            </ul>
        </>
    )
}
  
export default Accordion