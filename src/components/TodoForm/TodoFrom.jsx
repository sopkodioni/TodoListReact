import { observer } from "mobx-react-lite"
import input from "../../store/input"
import todoList from '../../store/todoList'

import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"

import style from './TodoForm.module.css'

const TodoForm = observer(({validForm}) => {
    const createTodo = (e) => {
        e.preventDefault()
        todoList.addTodo(input.value, validForm)
    }

    return (  
        <form className={style.todoForm}>
            <Input value={input.value} onChange={(event) => input.onChange(event.target.value)} type="text" placeholder="Name task"/>
            <Button onClickFunc={createTodo}>Add</Button>
        </form>
    )
})

export default TodoForm