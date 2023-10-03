import { makeAutoObservable } from "mobx";

export default class TodoListStore {
    todos = [
        {id: 1, title: 'Walking', completed: false},
        {id: 2, title: 'Eat', completed: false},
        {id: 3, title: 'Привет как дела', completed: false},
    ]
    
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(title, validForm, setValue){
        if(title === ''){
            validForm(false)
            return
        }

        const todo = {id: this.todos.length + 1, title, completed: false}
        this.todos.push(todo)
        validForm(true)
        setValue('')
    }

    deleteTodo(id){
        this.todos.splice(--id, 1)
    }

    completeTodo(id){
        
    }
}