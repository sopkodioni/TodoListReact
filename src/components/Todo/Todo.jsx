import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'

import style from './Todo.module.css'
import { useState } from 'react'

const Todo = () => {
    const [validForm, setValidForm] = useState(true)

    return (  
        <div className={style.todo}>
          { validForm || <Alert message="Error" type="error" showIcon /> }
          <TodoForm validForm={setValidForm}/>
          <TodoList />
        </div>
    )
}

export default Todo