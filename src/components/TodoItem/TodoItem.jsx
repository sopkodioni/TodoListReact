import { Button } from 'antd';
import style from './TodoItem.module.css'

import {DeleteOutlined, CheckOutlined} from '@ant-design/icons'
import { observer } from 'mobx-react-lite';
import todoList from '../../store/todoList';

const TodoItem = observer(({id, title}) => {
    return (  
        <div className={style.todoItem}>
            <div>
                <span>{id}. </span> <span>{title}</span>
            </div>
            {/* <Button className={style.completeBtn} type="primary"><CheckOutlined /></Button> */}
            <Button className={style.btn} onClick={() => todoList.deleteTodo(id)} type="primary" danger><DeleteOutlined /></Button>
        </div>
    )
})

export default TodoItem