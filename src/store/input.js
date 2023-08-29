import { makeAutoObservable } from "mobx";

class Input {
    value = ''

    constructor(){
        makeAutoObservable(this)
    }

    onChange(value){
        this.value = value
    }
}

export default new Input()