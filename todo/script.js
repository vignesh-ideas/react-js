let addButton = document.getElementById("todo-add");
addButton.addEventListener("click", function(event) {
    event.preventDefault();
    let name = document.getElementById("todo-name").value;
    if (name) {
        let div = document.createElement("div");
        let container = document.querySelector(".container")
        div.setAttribute("class", "list-container");
        div.innerHTML = `<button id="todo-list" onclick="strikeToDoList(event)">${name}</button>
                         <button id="todo-delete" onclick="deleteToDoList(event)">Delete</button>`;
        container.append(div);
        document.getElementById("todo-name").value = "";
    }
    
});

function deleteToDoList(event) {
    event.target.parentElement.remove();
}

function strikeToDoList(event) {
    const target = event.target.closest("button");
    if (target) {
        target.classList.toggle("strike-decoration");
    } 
}

