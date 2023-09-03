// Components
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'

// Styles
import style from './Todo.module.css'

function Todo() {
    return (  
        <div className={style.todo}>
          <TodoForm />
          <TodoList />
        </div>
    )
}

export default Todo