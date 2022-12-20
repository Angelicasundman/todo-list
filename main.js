const form = document.getElementById("new-todo-form");
const todoInput = document.getElementById('new-todo-input')
const todoListEl = document.getElementById('todo-list')
let todos = [];
let EditTodoId = -1;

renderTodos();

form.addEventListener('submit', function (event) {
    event.preventDefault();

saveTodo();
renderTodos();
});

function saveTodo(){
const todoValue = todoInput.value

const isEmpty = todoValue === '';
if (isEmpty){
    alert("Todo's input is empty");
} else {
    todos.push({
        value : todoValue,
        color : '#' + Math.floor(Math.random()*16777215).toString(16)}); // gör vår todo i slumpmässig färg
        
}
todoInput.value = '';
}


function renderTodos(){
    todoListEl.innerHTML ="";

todos.forEach((todo, index)=> {
todoListEl.innerHTML +=`
<div class="todos" id="${index}">
<p class="content" style="color: ${todo.color}">${todo.value}</p>
<i class="bi bi-trash3" data-action="delete" style="cursor: pointer; "></i>

</div>
`;
});
}
todoListEl.addEventListener('click', (event) => {
    const target = event.target;
    const parentElement = target.parentNode;
    
    const todo = parentElement;
    const todoId = Number(todo.id);
    const action = target.dataset.action
    
    action === 'delete' && deleteTodo(todoId);
})


    function deleteTodo(todoId) {
    todos = todos.filter((todo, index) => index !== todoId);
    EditTodoId = -1;
  
    renderTodos();
  }

  function filterStudents(filterValue)
{
    todoListEl.forEach((listItem) => {

        const todoEl = listItem.querySelector(".todos").innerText;
        if(todoEl.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        }

    });
}