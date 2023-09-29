import { observer } from "mobx-react-lite"

import input from "../../store/input"
import todoList from '../../store/todoList'

import style from './TodoForm.module.css'
import {Button,Input} from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'

const TodoForm = observer(({validForm}) => {
    const createTodo = (e) => {
        e.preventDefault()
        todoList.addTodo(input.value, validForm)
    }

    return (  
        <form className={style.todoForm}>
            <Input className={style.input} value={input.value} onChange={(event) => input.onChange(event.target.value)} placeholder="Name task"/>
            <Button className={style.btn} type="primary" onClick={createTodo}>
                <PlusCircleOutlined />
            </Button>
        </form>
    )
})

export default TodoForm