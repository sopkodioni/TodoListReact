import Btn from '../Btn/Btn'
import cl from './TodoItem.module.css'

function TodoItem({id, title}) {
    return (  
        <div className={cl.todoItem}>
            <span>{id}. </span>
            <span>{title}</span>
            <Btn style={{backgroundColor: 'red', marginLeft: 'auto'}}>delete</Btn>
        </div>
    )
}

export default TodoItem