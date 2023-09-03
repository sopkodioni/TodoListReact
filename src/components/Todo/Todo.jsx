import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'

import style from './Todo.module.css'

const Todo = () => {
    return (  
        <div className={style.todo}>
          <TodoForm />
          <TodoList />
        </div>
    )
}

export default Todo