import { Alert } from 'antd'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'
import TodoListStore from '../../store/todoList'
import style from './Todo.module.css'
import { useState } from 'react'


const Todo = () => {
    const [validForm, setValidForm] = useState(true)
    const [todoList] = useState(() => new TodoListStore())
    
    return (  
        <div className={style.todo}>
          { validForm || <Alert className={style.errorAdd} message="Input name task!" type="error" showIcon closable /> }
          <TodoForm todoList={todoList} validForm={setValidForm}/>
          <TodoList todoList={todoList}/>
        </div>
    )
}

export default Todo