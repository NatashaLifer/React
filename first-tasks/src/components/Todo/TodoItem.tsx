import { useState } from "react"

function TodoItem({title, done}: {title:string, done:boolean}) {
    const [completed, setChecked] = useState(done)
    let checkMark = "➖"
    completed ? checkMark = "✔️" : "➖"

    return (
        <div className="todo-item">
            <p>{title}:  
                <span onClick={() => setChecked((prevCompleted) => !prevCompleted)}> 
                    {checkMark} 
                </span>
            </p>
        </div>
    )
}

export default TodoItem