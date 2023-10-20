import style from './TodoItem.module.css'
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import {DeleteOutlined,CheckOutlined} from '@ant-design/icons'


const TodoItem = observer(({index, id, title, completed, todoList}) => {
    return (  
        <div className={completed ? `${style.todoItem} ${style.active}` : style.todoItem}>
            <h2>
                <span>{index}. {title}</span>
            </h2>
            <Button 
                className={style.completeBtn} 
                onClick={() => todoList.completeTodo(id)} 
                type="primary"
            >
                <CheckOutlined/>
            </Button>
            <Button 
                className={style.btn} 
                onClick={() => todoList.deleteTodo(id)} 
                type="primary" danger
            >
                <DeleteOutlined/>
            </Button>
        </div>
    )
})

export default TodoItem;