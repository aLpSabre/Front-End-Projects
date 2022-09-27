const container = document.getElementById("container");
const taskContainer = document.getElementById("taskContainer");
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];


//? To get the items in local storage
function renderLocalTodos(todos) {
  todos.forEach(element => {
    createListElement(element);
  });
}
renderLocalTodos(todos);

//? To add Task
addTask.addEventListener("click", () => {

  if (taskInput.value == "") {
    alert("Please Enter a Task");
  } else {

    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: taskInput.value
    }
    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos))
    createListElement(newTodo);

  }
  taskInput.value = ""

})
//? To check and delete items
container.addEventListener("click", ((e) => {

  if (e.target.classList.contains("fa-check") || e.target.classList.contains("check")) {

    e.target.parentElement.parentElement.querySelector("li").classList.toggle("line-through");
    todos.map((element) => {
    
      if (element.id === Number(e.target.parentElement.parentElement.querySelector("li").getAttribute("id"))) {
        element.completed = !element.completed
      }
    })
    localStorage.setItem("TODOS", JSON.stringify(todos))

  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
    todos = todos.filter(element => element.id !== Number(e.target.parentElement.parentElement.querySelector("li").getAttribute("id")))
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }


}))

//? To create a list item
function createListElement(newTodo) {

  let task = document.createElement("div");
  task.classList.add("task");


  let li = document.createElement("li");
  li.setAttribute("id", newTodo.id)
  li.textContent = newTodo.text;

  newTodo.completed && li.classList.add("line-through")
  task.appendChild(li);

  let check = document.createElement("button");
  check.classList.add("check")
  check.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
  task.appendChild(check);

  let trash = document.createElement("button");
  trash.classList.add("trash")
  trash.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  task.appendChild(trash);

  container.appendChild(task);
}

//? Input with enter
taskInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    addTask.click();
  }
})


//? Onload focus on input
window.onload = function () {
  taskInput.focus();
};
