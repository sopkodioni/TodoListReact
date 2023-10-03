import { Button } from 'antd';
import style from './TodoItem.module.css'
import { observer } from 'mobx-react-lite';

import {DeleteOutlined, CheckOutlined} from '@ant-design/icons'
import todoList from '../../store/todoList';

const TodoItem = observer(({id, title, completed}) => {
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