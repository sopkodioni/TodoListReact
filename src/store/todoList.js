import { makeAutoObservable } from "mobx";

export default class TodoListStore {
    isValid = true
    
    todos = [
        {id: 1, title: 'Walking', completed: false},
        {id: 2, title: 'Eat', completed: false},
        {id: 3, title: 'Привет как дела', completed: false},
    ]

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(title){
        if(title === ''){
            this.isValid = false
            return
        }

        const todo = {id: Date.now(), title, completed: false}
        this.todos.push(todo)
        this.isValid = true
    }

    deleteTodo(id){
        this.todos.splice(this.todos.findIndex(item => item.id === id), 1)
    }

    completeTodo(id){
        const completedEl = this.todos[this.todos.findIndex(item => item.id === id)]
        completedEl.completed = !completedEl.completed
    }
}