import { ToDo } from "./ToDo.js";
export class ToDoList {

    constructor()
    {
        this.listEl = document.querySelector("#list");
        this.url = "http://localhost:8080/api/todos.php";

        this.getToDos();


    }
    async getToDos(){
        this.listEl.innerHTML="";
        let response = await fetch(this.url);
        let data = await response.json();
        for(let i = 0; i < data.length; i++){
            new ToDo(data[i], this.listEl);
        }

    }
}
