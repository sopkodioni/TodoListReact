import { makeAutoObservable } from "mobx";
import input from "./input";

class TodoList {
    todos = [
        {id: 1, title: 'Walking', completed: false},
    ]
    
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(title, validForm){
        if(title === ''){
            validForm(false)
            return
        }

        const todo = {id: this.todos[this.todos.length - 1].id + 1, title, completed: false}
        this.todos.push(todo)
        validForm(true)


        input.onChange('')
    }

    deleteTodo(id){
        
    }

    completeTodo(){

    }
}

export default new TodoList()