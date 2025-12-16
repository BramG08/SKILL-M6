import { ToDoList } from "./ToDoList.js";
import { addTodo } from "./addToDo.js"

let list = new ToDoList();
const button = document.querySelector("#todo-add");
button.addEventListener("click", ()=>addTodo(list));