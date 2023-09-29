import { makeAutoObservable } from "mobx";
import input from "./input";

class TodoList {
    todos = [
        // {id: 1, title: 'Walking', completed: false},
        // {id: 2, title: 'Eat', completed: false},
        // {id: 3, title: 'Привет как дела', completed: false},
    ]
    
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(title, validForm){
        if(title === ''){
            validForm(false)
            return
        }

        const todo = {id: this.todos.length + 1, title, completed: false}
        this.todos.push(todo)
        validForm(true)


        input.onChange('')
    }

    deleteTodo(id){
        this.todos.splice(this.todos.indexOf(id), 1)
    }

    completeTodo(){

    }
}

export default new TodoList()