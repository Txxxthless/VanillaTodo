import { insertRow } from "./insertRow.js";
import { initiateTodos } from "./intiateTodos.js";

let todos = initiateTodos();

export const store = {
  value: todos,
  change: (expression) => {
    todos = todos.filter(expression);
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  set: (value) => {
    todos = value;
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  add: (value) => {
    const lastElement = todos[todos.length - 1];
    const id = lastElement.id + 1;
    value.id = id;
    todos = [...todos, value];
    insertRow(value);
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  },
};

const onStart = () => {
  for (let todo of todos) {
    insertRow(todo);
  }

  const createButton = document.querySelector("#create-button");

  createButton.onclick = () => {
    store.add({
      name: "Doo",
      created: Date.now(),
      category: "Task",
      content: "Bar",
      dates: "",
    });
  };
};

onStart();
