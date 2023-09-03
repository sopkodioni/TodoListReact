import Button from '../../ui/Button/Button'
import style from './TodoItem.module.css'

const TodoItem = ({id, title}) => {
    return (  
        <div className={style.todoItem}>
            <span>{id}. </span>
            <span>{title}</span>
            <Button styles={{backgroundColor: 'red', marginLeft: 'auto'}}>delete</Button>
        </div>
    )
}

export default TodoItem