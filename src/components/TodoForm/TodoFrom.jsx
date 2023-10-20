import style from './TodoForm.module.css'
import { observer } from "mobx-react-lite"
import {Button,Input} from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'
import { useState } from "react"

const TodoForm = observer(({todoList}) => {
    const [value, setValue] = useState('')

    const createTodo = (e) => {
        todoList.addTodo(value)
        setValue('')
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) createTodo()
    }

    return (  
        <form className={style.todoForm} onSubmit={(event) => event.preventDefault()}>
            <Input className={style.input} 
                    value={value} 
                    onChange={(event) => setValue(event.target.value)} 
                    placeholder="Name task"
                    onKeyDown={onKeyDown}
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