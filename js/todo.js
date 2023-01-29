const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function init() {
  const getToDos = localStorage.getItem("movieList");

  if (getToDos !== null) {
    const parsedToDos = JSON.parse(getToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
  }
}

function savedToDo() {
  localStorage.setItem("movieList", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteToDoList = event.target.parentElement;
  deleteToDoList.remove();

  toDos = toDos.filter((toDoObj) => toDoObj.id !== parseInt(deleteToDoList.id));
  if (toDos.length === 0) {
    toDoList.classList.remove("todo-list__background");
    toDoList.classList.add("todo-list__hide__background");
  }
  savedToDo();
}

function paintToDo(toDoObj) {
  const li = document.createElement("li");
  const text = document.createElement("span");
  const button = document.createElement("span");

  li.appendChild(button);
  li.appendChild(text);
  li.id = toDoObj.id;
  button.innerText = "❌";
  text.innerText = toDoObj.toDo;
  toDoList.appendChild(li);
  toDoList.classList.remove("todo-list__hide__background");
  todoList.classList.add("todo-list__background");
  button.addEventListener("click", deleteToDo);
}

function addToDo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";
  const newToDoObj = { toDo: newTodo, id: Date.now() };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  savedToDo();
}

init();

toDoForm.addEventListener("submit", addToDo);
