import Button from '../Button/Button'
import style from './TodoItem.module.css'

function TodoItem({id, title}) {
    return (  
        <div className={style.todoItem}>
            <span>{id}. </span>
            <span>{title}</span>
            <Button style={{backgroundColor: 'red', marginLeft: 'auto'}}>delete</Button>
        </div>
    )
}

export default TodoItem