export class ToDo {
    constructor(data, root){
        this.data = data;
        this.root = root;
        this.render();
        console.log(data);
    }
    render(){
        this.htmlElement = document.createElement("li");
        this.htmlElement.textContent = this.data.text;
        this.htmlElement.className = "todo";
        this.root.appendChild(this.htmlElement);
    }
}