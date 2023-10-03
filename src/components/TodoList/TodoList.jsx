import style from './TodoList.module.css'
import { observer } from 'mobx-react-lite'

import todoList from '../../store/todoList'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = observer(() => {
    return (  
        <div className={style.todoList}>
            {
                todoList.todos.length ? 
                    todoList.todos.map((todo, index) => (
                    <TodoItem key={index} id={++index} title={todo.title} completed={todo.completed} />
                    ))
                    :
                    <h2 className={style.titleList}>Empty list</h2>
            }
        </div>
    )
})

export default TodoList