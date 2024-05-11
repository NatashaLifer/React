import { FC, useState } from 'react'
import { AccordionItemProps } from "./types"

const AccordionItem: FC<AccordionItemProps> = ({title, description}) => {  
    
    const [visibilityItem, setVisibilityItem] = useState("accordion-item-description")
    const changeVisibility = () => {
        setVisibilityItem(prevClass => {
            if(prevClass === 'accordion-item-description') return 'accordion-item-description active'
            return "accordion-item-description"
        })
    }
    return (
        <li className='accordion-item'>
            <h2 className='accordion-item-title' onClick={changeVisibility}>
                {title}
            </h2>
            <p className={visibilityItem}>{description}</p>
        </li>
    )
}

export default AccordionItem