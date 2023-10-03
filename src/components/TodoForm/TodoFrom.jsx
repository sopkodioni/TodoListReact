import { observer } from "mobx-react-lite"

import todoList from '../../store/todoList'

import style from './TodoForm.module.css'
import {Button,Input} from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'
import { useState } from "react"

const TodoForm = observer(({validForm}) => {
    const [value, setValue] = useState('')

    const createTodo = (e) => {
        todoList.addTodo(value, validForm, setValue)
    }

    return (  
        <form className={style.todoForm} onSubmit={(event) => event.preventDefault()}>
            <Input className={style.input} 
                    value={value} 
                    onChange={(event) => setValue(event.target.value)} 
                    placeholder="Name task"
                    onKeyDown={(event) => {
                        if(event.keyCode === 13) createTodo()
                    }}
            />
            <Button className={style.btn} 
                    type="primary" 
                    onClick={createTodo}
            >
                <PlusCircleOutlined />
            </Button>
        </form>
    )
})

export default TodoForm