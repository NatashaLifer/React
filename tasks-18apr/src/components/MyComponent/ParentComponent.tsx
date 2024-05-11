// Task 1
// Створіть батьківський компонент ParentComponent, який матиме стан 'value' з початковим значенням - 'gogi'.
// Передайте це значення у дитячий компонент (ChildComponent) у вигляді пропси(title). 
// Цей компонент має відобразити дану пропсу на екрані як заголовок(h1), та окрім цього мати кнопку(change title) для зміни стану.
// Реалізуйте механізм зміни значення 'value' на рівні ParentComponent та спостережіть як зміни впливають на ChildComponent через пропсу.

// Тобто в ParentComponent, потрібно стоврити функцію яка буде змінювати стан(value) з 'gogi' на 'fofi'.
// Цю функцію потрібно також треба передати як пропс для ChildComponent, 
// щоб кнопка яка в ньому знаходилась як раз по кліку виконувала зміну заголовку.
import { useState } from 'react'
import ChildComponent from "./ChildComponent"
 
const ParentComponent = () => {
    const [value, setValue] = useState("gogi")

    const handleTitleChange = () => {
        setValue(prevValue => {
            if(prevValue === "gogi") return "fofi"
            return "gogi"
        })
    }

    return (
        <div className='main'>
            <ChildComponent
                title = {value}
                changeTitle={handleTitleChange}
            />
        </div>
    )
}
  
export default ParentComponent