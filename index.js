import { insertRow } from "./insertRow.js";
import { initiateTodos } from "./intiateTodos.js";

const initialTodos = initiateTodos();
let todos = [];

export const store = {
  value: todos,
  change: (expression) => {
    todos = todos.filter(expression);
    localStorage.setItem("todos", JSON.stringify(todos));
  },
  add: (value) => {
    const lastElement = todos[todos.length - 1];
    const id = lastElement ? lastElement.id + 1 : 1;
    value.id = id;
    todos = [...todos, value];
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  },
};

const onStart = () => {
  for (let todo of initialTodos) {
    insertRow(todo);
  }

  const createButton = document.querySelector("#create-button");

  createButton.onclick = () => {
    insertRow({
      name: "Doo",
      created: Date.now(),
      category: "Task",
      content: "Bar",
      dates: "",
    });
  };
};

onStart();
