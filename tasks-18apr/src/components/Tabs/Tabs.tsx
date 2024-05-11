// Task 3
// Створіть компонент Tabs.
// Приймає пропсу content яка має вигляд масиву обʼєктів типу { title: string, content: ReactNode}
// По кліку на тайтл змінюється контент табу який показується. 

import { FC, useState} from 'react'
import { TabsProps } from './types'
import './Tabs.css'


const Tabs: FC<TabsProps> = ({tabsContent}) => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

    const chooseActiveTab = (index: number) => {
        setActiveTabIndex(index)
    }

    return (
        
        <div className='tabs-wrapper'>
            <ul className='tabs__header'>
                {tabsContent.map((elem, index) => (
                        <li 
                            className={`tabs__header-item ${activeTabIndex===index ? 'active' : ''}`}
                            key={`${elem.title}-${index}`} 
                            onClick={() => {
                                chooseActiveTab(index) 
                            }}
                        >
                            {elem.title}
                    </li>   
                ))}   
            </ul>
            <div className='tabs__body'>{tabsContent[activeTabIndex].content}</div>
        </div> 
    )
}
  
export default Tabs