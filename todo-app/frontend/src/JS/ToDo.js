export class ToDo {
  onClickEvent = async () =>{
        // let newStatus = this.data.status == "done" ? "todo" : "done";
        let newStatus = "done";
        if(this.data.status === "done"){
            newStatus = "todo";
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {   
                    id: this.data.id,
                    status: newStatus
                }
            )
        }
        const response = await fetch('http://localhost:8080/api/editTodo.php', options);
        if(response.ok != true){
            throw new Error("Response status: " + response.status);
        } 
    }
    constructor(data, root) {
        this.data = data;
        this.root = root;
        this.render();
        console.log(data);
    }
    render() {
        this.htmlElement = document.createElement("li");
        this.htmlElement.textContent = this.data.text;
        this.htmlElement.className = "todo";
        this.root.appendChild(this.htmlElement);
        this.htmlElement.addEventListener('click', this.onClickEvent);
        
       
    
    }
}