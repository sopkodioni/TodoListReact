// Store
import { observer } from "mobx-react-lite"
// input form state
import input from "../../store/input"
// todoList state
import todoList from '../../store/todoList'


// Components
import Button from "../Button/Button"
import Input from "../Input/Input"


// Styled
import style from './TodoForm.module.css'

const TodoForm = observer(() => {
    const createTodo = (e) => {
        e.preventDefault()
        todoList.addTodo(input.value)
    }

    return (  
        <form className={style.todo__form}>
            <Input value={input.value} onChange={(event) => input.onChange(event.target.value)} type="text" placeholder="Name task"/>
            <Button onClickFunc={createTodo}>Add</Button>
        </form>
    )
})

export default TodoForm