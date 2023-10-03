import style from './TodoItem.module.css'
import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import {DeleteOutlined} from '@ant-design/icons'


const TodoItem = observer(({id, title, completed, todoList}) => {
    return (  
        <div className={completed ? `${style.todoItem} ${style.active}` : style.todoItem}>
            <h2>
                <span>{id}. {title}</span>
            </h2>
            
            <Button className={style.btn} 
                    onClick={() => todoList.deleteTodo(id)} 
                    type="primary" danger>
                    <DeleteOutlined />
            </Button>
        </div>
    )
})

export default TodoItem;