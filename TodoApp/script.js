let todos = [];

// Use window.onload to ensure that the code executes after the page is fully loaded
window.onload = function () {
    loadTodos();
    renderTodos();
};

const taskInput = document.getElementById("task");
const dateInput = document.getElementById("date");
const todoList = document.getElementById("todo-list");

taskInput.addEventListener("keyup",function(e){
    if(e.key==="Enter"){
        addTodo()
    }
})
function addTodo() {
    const taskValue = taskInput.value.trim();
    const dateValue = dateInput.value;

    if (taskValue) {
        const todo = { task: taskValue, date: dateValue };
        todos.push(todo);
        saveTodos();
        renderTodos();
        taskInput.value = "";
        dateInput.value = "";
    }
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <div  style="display:flex; justify-content:space-between; padding:4px">
            <span>${todo.task} | ${todo.date}</span>
            <button onclick="removeTodo(${index}) ">Remove</button>
            </div>
        `;
        todoList.appendChild(listItem);
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    todos = storedTodos ? JSON.parse(storedTodos) : [];
}
