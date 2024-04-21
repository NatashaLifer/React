// import { useState } from "react"
import TodoItem from "./TodoItem"
import "./Todo.scss"

function Todo() {
    
    const allTodos = [
      {title: "Wash Gogies face", done: false, id: "1"},
      {title: "Buy a present", done: true, id: "2"},
      {title: "Eat chicken", done: false, id: "3"},
      {title: "Subscribe to BUOY studies", done: true, id: "4"}
    ]

    // const [todos, setTodos] = useState(allTodos)
    
    // function toggleTodo(id:any, done:boolean){
    //   setTodos((currentTodos) => {
    //     return currentTodos.map((todo) => {
    //       if (todo.id === id) {
    //         return { ...todo, done }
    //       }
    //       return todo
    //     })
    //   })
    // }

    return (
      <>
        <h2 className='todo__title'> TODO list </h2>
        
        <ul className='todo__wrapper-list'>
          {
            // allTodos.map((elem, index) => <li key={`${elem.title}-${index}`}>{elem.title}: {elem.done ? "+" : "-"}</li>)

            // TODO: винеси цю лішку в окремий компонент TodoItem, який прийматиме 2 пропси title та done
            allTodos.map((elem, index) => (
                <TodoItem
                    key={`${elem.title}-${index}`}
                    title={elem.title}
                    done={elem.done}
                />
            ))
          }
        </ul>
      
      </>
    )
}
  
export default Todo