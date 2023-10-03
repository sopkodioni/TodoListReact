import style from './TodoList.module.css'
import { observer } from 'mobx-react-lite'
import TodoItem from '../TodoItem/TodoItem'


const TodoList = observer(({ todoList }) => {
    return (  
        <div className={style.todoList}>
            {
                todoList.todos.length ? 
                    todoList.todos.map((todo, index) => (
                    <TodoItem 
                        id={todo.id} 
                        key={index} 
                        index={++index} 
                        title={todo.title} 
                        todoList={todoList} 
                        completed={todo.completed} 
                    />
                    ))
                    :
                    <h2 className={style.titleList}>Empty list</h2>
            }
        </div>
    )
})

export default TodoList