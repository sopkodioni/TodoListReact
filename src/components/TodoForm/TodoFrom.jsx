// Store
import { observer } from "mobx-react-lite"
// input form state
import input from "../../store/input"
// todoList state
import todoList from '../../store/todoList'


// Components
import Btn from "../Btn/Btn"
import Input from "../Input/Input"


// Styled
import cl from './TodoForm.module.css'

const TodoForm = observer(() => {
    const createTodo = (e) => {
        e.preventDefault()
        todoList.addTodo(input.value)
    }

    return (  
        <form className={cl.todo__form}>
            <Input value={input.value} onChange={(event) => input.onChange(event.target.value)} type="text" placeholder="Name task"/>
            <Btn onClickFunc={createTodo}>Add</Btn>
        </form>
    )
})

export default TodoForm