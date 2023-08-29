// Components
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../TodoForm/TodoFrom'

// Styles
import cl from './Todo.module.css'

function Todo() {
    return (  
        <div className={cl.todo}>
          <TodoForm />
          <TodoList />
        </div>
    )
}

export default Todo