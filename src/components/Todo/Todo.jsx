import { Alert } from 'antd'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'

import style from './Todo.module.css'
import { useState } from 'react'

const Todo = () => {
    const [validForm, setValidForm] = useState(true)

    return (  
        <div className={style.todo}>
          { validForm || <Alert className={style.errorAdd} message="Input name task!" type="error" showIcon closable /> }
          <TodoForm validForm={setValidForm}/>
          <TodoList />
        </div>
    )
}

export default Todo