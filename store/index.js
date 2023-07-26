import { initiateTodos, initiateArchivedTodos } from "./intiateTodos.js";

let activeTodos = initiateTodos();
let archivedTodos = initiateArchivedTodos();

export const activeTodosStore = {
  value: activeTodos,
  add: (value) => {
    activeTodos = [...activeTodos, value];
  },
};

export const archivedTodosStore = {
  value: archivedTodos,
  add: (value) => {
    const lastElement = archivedTodos[archivedTodos.length - 1];
    const id = lastElement ? lastElement.id + 1 : 1;
    value.id = id;
    archivedTodos = [...archivedTodos, value];
    localStorage.setItem("archivedTodos", JSON.stringify(archivedTodos));
    console.log(archivedTodos);
  },
  remove: (value) => {
    archivedTodos = archivedTodos.filter((todo) => todo.id !== value.id);
    localStorage.setItem("archivedTodos", JSON.stringify(archivedTodos));
  },
  edit: (value) => {
    for (let todo of archivedTodos) {
      if (todo.id === value.id) {
        todo = value;
      }
    }
    localStorage.setItem("archivedTodos", JSON.stringify(archivedTodos));
  },
};
