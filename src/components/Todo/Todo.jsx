import { Alert } from 'antd'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'
import TodoListStore from '../../store/todoList'
import style from './Todo.module.css'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'


const Todo = observer(() => {
  const [todoList] = useState(() => new TodoListStore())
  
  return (  
      <div className={style.todo}>
        { 
          todoList.isValid || 
          <Alert 
            className={style.errorAdd} 
            message="Input name task!" 
            type="error" 
            showIcon 
            closable 
          /> 
        }

        <TodoForm todoList={todoList}/>
        <TodoList todoList={todoList}/>
      </div>
  )
})

export default Todo