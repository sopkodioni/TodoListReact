import { makeAutoObservable } from "mobx";
import input from "./input";

class TodoList {
    todos = [
        {id: 1, title: 'Walking', completed: false},
    ]
    
    constructor(){
        makeAutoObservable(this)
    }

    addTodo(title){
        const todo = {id: this.todos[this.todos.length - 1].id + 1, title, completed: false}
        this.todos.push(todo)

        input.onChange('')

        console.log(this.todos);
    }

    deleteTodo(id){
        
    }

    completeTodo(){

    }
}

export default new TodoList()