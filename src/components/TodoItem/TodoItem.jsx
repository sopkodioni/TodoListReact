import Button from '../Button/Button'
import cl from './TodoItem.module.css'

function TodoItem({id, title}) {
    return (  
        <div className={cl.todoItem}>
            <span>{id}. </span>
            <span>{title}</span>
            <Button style={{backgroundColor: 'red', marginLeft: 'auto'}}>delete</Button>
        </div>
    )
}

export default TodoItem